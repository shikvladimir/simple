var express = require('express')
var favicon = require('serve-favicon')
var path = require('path')
var mysql = require('mysql')
var app = express()

mysql_host = 'localhost'
mysql_user = 'yourdoma_node'
mysql_password = 'password'
mysql_database = 'yourdoma_node'

var connection = mysql.createConnection({
  host     : mysql_host,
  user     : mysql_user,
  password : mysql_password,
  database : mysql_database
});
connection.query('SELECT 1', function(err) {
  if (err) {
  message = 'не установлено'
  return
  }
  message = 'установлено'
  });
connection.end()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', function (req, res) {
  res.render('index', { version: process.version, mysql_state: message, mysql_user: mysql_user, mysql_database: mysql_database})
})

const server = app.listen()
