const express = require('express')
var cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/user'

        // middlewares
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        //CORS 
        this.app.use(cors())

        //lectura y parseo del body 
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port)
        })
    }

}

module.exports = Server;