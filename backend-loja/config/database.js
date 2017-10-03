const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_applestore', { useMongoClient: true })

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório'"
