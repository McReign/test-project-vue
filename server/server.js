const express = require('express')
const UsersManager = require('./models')
const bodyParser = require('body-parser')
const app = express()

const usersManager = new UsersManager()

app.use(bodyParser.json())

app.post('/login', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  usersManager.loginUser(res, req.body.login)
})

app.get('/getCards', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  // console.log(req.query)
  usersManager.getUserCards(res, req.query.login)
})

console.log("Started at :9003");
app.listen(9003)
