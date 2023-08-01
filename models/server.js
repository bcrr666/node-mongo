const express = require('express');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        this.connectDB()

        this.routes();
    }

    async connectDB() {
        await dbConnection()
    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/users'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}


module.exports = Server
