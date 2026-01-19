import connectDB from "@/lib/mongodb";
import ParkingSlot from "@/models/ParkingSlot";

export async function POST(req) {
  try {
    await connectDB();

    const { vehicleNumber } = await req.json();

    if (!vehicleNumber) {
      return new Response("Vehicle number required", { status: 400 });
    }

    const slot = await ParkingSlot.findOne({
      vehicleNumber,
      isOccupied: true,
    });

    if (!slot) {
      return new Response("Vehicle not found", { status: 404 });
    }

    const exitTime = new Date();
    const entryTime = slot.entryTime;

    const durationMs = exitTime - entryTime;
    const durationHours = Math.ceil(durationMs / (1000 * 60 * 60));

    const feePerHour = 50;
    const totalFee = durationHours * feePerHour;

    slot.isOccupied = false;
    slot.vehicleNumber = null;
    slot.exitTime = exitTime;
    slot.fee = totalFee;

    await slot.save();

    return new Response(
      JSON.stringify({
        message: "Vehicle exited",
        hoursParked: durationHours,
        fee: totalFee,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Error during exit", { status: 500 });
  }
}
