const mysql = require('../../database')
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const sql = 'INSERT INTO users VALUES (NULL, ?, ?, NULL)'
  const values = [
    req.body.username,
    bcrypt.hashSync(req.body.password, bcrypt.genSaltSync()),
  ]

  mysql.execute(sql, values, (err, results, fields) => {
    if (err) {
      res.json({'message': 'user already taken'})
      res.end()
    } else {
      if (results.length) {
        res.json(req.body)
      } else {
        res.json({
          'message': 'Invalid'
        })
      }
    }
  })

}
