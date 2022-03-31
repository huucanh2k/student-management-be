import { StudentModel } from "../models/StudentModel.js"

export const fetchAllUser = async (req, res) => {
  try {
    const queryParams = req.query
    console.log({ queryParams })
    let allDataAfterSearch = await StudentModel.find({
      name: { $regex: `${req.query?.name_like || ""}`, $options: "i" },
      city: req.query.city ? req.query.city : { $regex: "", $options: "i" },
    })
    const totalRows = allDataAfterSearch && allDataAfterSearch.length
    const query = StudentModel.find({
      name: { $regex: `${req.query?.name_like || ""}`, $options: "i" },
      city: req.query.city ? req.query.city : { $regex: "" },
    })
    query.sort({ [req.query?._sort || undefined]: req.query?._order || "" })
    query.limit(req.query?._limit * 1)
    query.skip((req.query?._page - 1) * req.query?._limit)
    query.exec((err, arr) => {
      const pagination = {
        _page: Number(req.query?._page),
        _limit: Number(req.query?._limit),
        _totalRows: totalRows,
      }
      res.status(200).json({ data: arr, pagination })
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getStudentById = async (req, res) => {
  console.log({ req })
  try {
    const user = await StudentModel.findById(req.params.idStudent).exec()
    console.log({ user })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const addUser = async (req, res) => {
  try {
    const newUser = req.body
    console.log(req.body)

    const user = new StudentModel(newUser)

    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const updateUser = async (req, res) => {
  try {
    const idUser = req.params.idUser
    const updateUser = req.body
    console.log({ updateUser })

    const user = await StudentModel.findOneAndUpdate(
      { _id: idUser },
      updateUser
    )

    await user.save()

    res.status(200).json(user)
  } catch (error) {
    console.log({ error })
    res.status(500).json(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    console.log(req.params)
    await StudentModel.deleteOne({ _id: req.params.idUser })
  } catch (error) {
    console.log({ error })
    res.status(500).json(error)
  }
}
