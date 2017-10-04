const server = require('./config/server')
require('./config/database')

// criado dps
require('./config/routes')(server)

server.use((err,req,res,next) =>{
    res.status(500).json({
        message: err.message
    })
})
