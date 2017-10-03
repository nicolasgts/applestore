const server = require('./config/server')
require('./config/database')

// criado dps
require('./config/routes')(server)
