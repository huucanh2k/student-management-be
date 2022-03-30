import mongoose from "mongoose"

const schema = new mongoose.Schema({})

export const userModel = new mongoose.model("user", schema)
