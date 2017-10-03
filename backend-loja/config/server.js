const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()



server.use(bodyParser.urlencoded({extended : false}))
server.use(bodyParser.json())

server.listen(port, () => console.log(`O backend esta rodando na porta ${port}`))


module.exports = server
