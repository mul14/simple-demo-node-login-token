const mysql = require('../../database')
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');

module.exports = (req, res) => {

  const sql = 'SELECT id, username, password FROM users WHERE username = ?'

  const values = [req.body.username]

  mysql.execute(sql, values, (err, results, fields) => {
    if (err) throw err

    if (results.length) {
      const dbPassword = results[0].password
      const password = req.body.password

      if (bcrypt.compareSync(password, dbPassword)) {
        const generatedToken = randomstring.generate()

        const sql = 'UPDATE users SET token = ? WHERE id = ?'
        const values = [generatedToken, results[0].id]

        mysql.execute(sql, values, () => {
          res.json({
            message: 'Valid user',
            token: generatedToken,
          })
        })

      } else {
        res.json({
          message: 'Invalid credentials'
        })
      }

    } else {
      res.json({
        message: 'Invalid credentials'
      })
    }
  })



}
