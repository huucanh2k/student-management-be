import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

export const CityModel = mongoose.model("City", schema)
