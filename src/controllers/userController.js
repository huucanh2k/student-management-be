export const fetchAllUser = (req, res) => {
  res.status(200).json([
    {
      name: "tran huu canh",
      age: 22,
    },
    {
      name: "tran huu canh",
      age: 22,
    },
  ])
}
