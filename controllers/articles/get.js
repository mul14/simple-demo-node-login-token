module.exports = (req, res) => {
  res.json({
    message: 'Article with ID: ' + req.params.id,
    data: {
      title: 'Judul di sini',
      content: 'lorem ipsum',
    }
  })
}
