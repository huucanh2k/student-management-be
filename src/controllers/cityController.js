import { CityModel } from "../models/CityModel.js"

export const getAllCity = async (req, res) => {
  try {
    const data = await CityModel.find()
    res.status(200).json({ data })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const getCityById = async (req, res) => {
  try {
    console.log(req.query)
    const idCity = req.params.idCity
    const data = await CityModel.find({ _id: idCity })
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const addCity = async (req, res) => {
  try {
    console.log({ req })
    const newCity = req.body

    const city = new CityModel(newCity)

    await city.save()
    res.status(200).json(city)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const updateCity = async (req, res) => {
  try {
    const codeCity = req.params.codeCity
    const updateCity = req.body
    console.log({ updateCity })

    const post = await CityModel.findOneAndUpdate(
      { code: codeCity },
      updateCity
    )

    await post.save()

    res.status(200).json(post)
  } catch (error) {
    console.log({ error })
    res.status(500).json(error)
  }
}

export const deleteCity = async (req, res) => {
  try {
    console.log(req.params)
    await CityModel.deleteOne({ _id: req.params.idCity })
  } catch (error) {
    console.log({ error })
    res.status(500).json(error)
  }
}
