import connectDB from "@/lib/mongodb";
import ParkingSlot from "@/models/ParkingSlot";

export async function POST(req) {
  try {
    await connectDB();

    const { vehicleNumber } = await req.json();

    if (!vehicleNumber) {
      return new Response("Vehicle number required", { status: 400 });
    }

    // Check if vehicle already parked
    const existingVehicle = await ParkingSlot.findOne({
      vehicleNumber,
      isOccupied: true,
    });

    if (existingVehicle) {
      return new Response("Vehicle already parked", { status: 400 });
    }

    // Find free slot
    const freeSlot = await ParkingSlot.findOne({ isOccupied: false });

    if (!freeSlot) {
      return new Response("No parking slots available", { status: 400 });
    }

    freeSlot.isOccupied = true;
    freeSlot.vehicleNumber = vehicleNumber;
    freeSlot.entryTime = new Date();
    freeSlot.exitTime = null;
    freeSlot.fee = 0;

    await freeSlot.save();

    return new Response(JSON.stringify(freeSlot), { status: 200 });
  } catch (error) {
    return new Response("Error during entry", { status: 500 });
  }
}
