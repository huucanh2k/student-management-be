import express from "express"
import {
  getAllCity,
  addCity,
  updateCity,
  deleteCity,
  getCityById,
} from "../controllers/cityController.js"

const router = express.Router()

const initCityRoute = (app) => {
  router.get("/", getAllCity)
  router.get("/:idCity", getCityById)
  router.post("/", addCity)
  router.put("/update/:codeCity", updateCity)
  router.delete("/:idCity", deleteCity)

  return app.use("/cities", router)
}

export default initCityRoute
