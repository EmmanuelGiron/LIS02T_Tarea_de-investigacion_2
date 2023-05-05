//Haciendo conexion a base de datos

const mysql = require('mysql');
const connection= mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

});

connection.connect((error)=>{
    if(error){
        console.log("El errorde conexion es:" + error)
    }
    console.log("Conexion Exitosa");
});

//Para mandar a llamar globalmente a la conexion
module.exports = connection;