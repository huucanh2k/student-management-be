import express from "express"
import {
  fetchAllCity,
  addCity,
  updateCity,
  deleteCity,
} from "../controllers/cityController.js"

const router = express.Router()

const initCityRoute = (app) => {
  router.get("/", fetchAllCity)
  router.post("/", addCity)
  router.put("/update", updateCity)
  router.delete("/:idCity", deleteCity)

  return app.use("/cities", router)
}

export default initCityRoute
