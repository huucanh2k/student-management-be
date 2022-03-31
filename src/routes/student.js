import express from "express"
import {
  addUser,
  deleteUser,
  fetchAllUser,
  updateUser,
  getStudentById,
} from "../controllers/studentController.js"

const router = express.Router()

const initUserRoute = (app) => {
  router.get("/", fetchAllUser)
  router.get("/:idStudent", getStudentById)
  router.post("/", addUser)
  router.put("/:idUser", updateUser)
  router.delete("/:idUser", deleteUser)

  return app.use("/students", router)
}

export default initUserRoute
