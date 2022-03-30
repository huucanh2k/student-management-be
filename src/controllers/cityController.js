import { CityModel } from "../models/CityModel.js"

export const fetchAllCity = (req, res) => {
  res.status(200).json([
    {
      code: "hcm",
      name: "Hồ Chí Minh",
    },
    {
      code: "hn",
      name: "Hà Nội",
    },
  ])
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
    const updateCity = req.body
    console.log({ updateCity })

    const post = await CityModel.findOneAndUpdate(
      { code: updateCity.code },
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
