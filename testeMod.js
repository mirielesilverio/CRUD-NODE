const mysqlTools = require('./app.js');
 
mysqlTools.conectar;

var objInsert = {
    name : "TESTE 3",						
    location: "teste 3"
};				

mysqlTools.sqlIn(objInsert,'INSERT INTO author SET ?');

mysqlTools.desconectar;

