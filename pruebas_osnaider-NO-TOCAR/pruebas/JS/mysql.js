/*constante para llamar librería MySQL*/
const mysql = require('mysql')

/*constante para conectarse a la DB*/
const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:1234
    
})

/*prueba de conexion con DB*/
conection.connect((err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})