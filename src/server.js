import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()
// import router from "./routes/routes.js"
import mongoose from "mongoose"
import initCityRoute from "./routes/city.js"
import initUserRoute from "./routes/user.js"
const app = express()

app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }))

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.URL_DTB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB")
  })
  .catch((err) => {
    console.log("Failed connect to DB, ", err)
  })

// app.use("/", router)
initCityRoute(app)
initUserRoute(app)

app.listen(PORT, () => {
  console.log("App listening on port", PORT)
})
