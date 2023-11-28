const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '123456789',
    database: 'hospital'
})

conexion.connect(function(error){
    if(error){
        console.log(`Ocurrió un error en la conexión ${error}`)
        return;
    } else {
        console.log('Conexión exitosa')
    }
})

module.exports = {conexion}