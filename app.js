// ==================================================
// ===		 AUTHOR : MIRIÉLE SILVÉRIO            ===
// ===		 DATE 	: 21/09/2019				  ===
// ===		 VERSION: 1.0						  ===
// ==================================================


//importanto módulo de integração com MySQL
const mysql = require('mysql');

//constante de configurações de conexão com o banco de dados
const conexao = mysql.createConnection
({
	host: 'localhost', 		//EX: localhost
	user: 'root', 		//EX: root
	password: '', 	//EX: aluno123
	database: 'teste'	//Base de dados a ser conectada
});

//conexão com o banco de dados

function conectar()
{
	conexao.connect( (erro) => {
		if (erro) 
		{
			console.log('Erro ao se conectar com o banco de dados',erro);
			return
		}
		console.log('Conectado');
	})
}


//encerrando conexão

function  desconectar()
{
	conexao.end( (erro) => {
		if (erro) 
		{
			console.log('Erro ao encerrar conexão',erro);
			return
		}
	})
}


//função para seleção de dados 
function sqlSel(querySel)
{

	conexao.query(querySel,(erro, selRows) =>
	{
		if (erro) 
		{
			console.log('Erro ao executar query',erro);
			return
		}

		var resul = [];

		selRows.forEach( obj => {
			resul.push(obj);
			//console.log(resul);
		});

		//console.log(resul);
		return resul;
	})
}

function sqlIn(objInsert,queryIn)
{
	conexao.query(queryIn,objInsert,(erro, res) =>
	{
		if (erro) 
		{
			console.log('Erro ao executar query');
			return
		}
	})
}

function sqlUp(queryUp,queryParam)
{
	conexao.query(queryUp,queryParam, (erro, res) =>
	{
		if (erro) 
		{
			console.log('Erro ao executar query');
			return
		}
	})
}

function sqlDel(queryDel,queryParam)
{
	conexao.query(queryDel,queryParam, (erro, res) =>
	{
		if (erro) 
		{
			console.log('Erro ao executar query');
			return
		}
	})
}

//conectar();
//=======================================================================================
//===								  BLOCO DE TESTE							      ===
//===   --------------------------------------------------------------------------    ===
//===                           ******* TESTE SELECT *******                          ===
//===                     console.log(sqlSel('SELECT * FROM author;'));               ===
//===   --------------------------------------------------------------------------    ===
//===                           ******* TESTE INSERT *******                          ===
//===                                var objInsert = {								  ===
//===	                             	name : "TESTE",								  ===
//===									location: "teste"							  ===
//===								}											      ===
//===					sqlIn(objInsert,'INSERT INTO author SET ?');			      ===
//===   --------------------------------------------------------------------------    ===
//===                           ******* TESTE UPDATE *******                          ===
//===		   sqlUp('UPDATE author SET name = ? WHERE id = ?',["TESTE 2",4]);		  ===
//===   --------------------------------------------------------------------------    ===
//===                           ******* TESTE DELETE *******                          ===
//===   			sqlDel('DELETE FROM author WHERE id = ?',[5]);					  ===
//=======================================================================================
//desconectar();