import mongoose from "mongoose";

const ParkingSlotSchema = new mongoose.Schema(
  {
    slotNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    isOccupied: {
      type: Boolean,
      default: false,
    },
    vehicleNumber: {
      type: String,
      default: null,
    },
    entryTime: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ParkingSlot ||
  mongoose.model("ParkingSlot", ParkingSlotSchema);
