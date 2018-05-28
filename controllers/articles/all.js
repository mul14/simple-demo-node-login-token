module.exports = (req, res) => {
  res.json({
    message: 'All articles',
    data: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
    ]
  })
}
