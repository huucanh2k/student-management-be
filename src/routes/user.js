import express from "express"
import { fetchAllUser } from "../controllers/userController.js"

const router = express.Router()

const initUserRoute = (app) => {
  router.get("/", fetchAllUser)

  return app.use("/users", router)
}

export default initUserRoute
