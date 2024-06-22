"const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

//faz uma atualização na tabela onde o código é o fornecido pela requisição, e insere no //campo o valor com a requisição de area.
app.post('/atualizaArea', (req, res) => {
const db = new sqlite3.Database('./database.db');
const sql = 'UPDATE AREA FROM TABELA WHERE CODIGO=' + req.body.codigo 'VALUES(?)' + req.body.area
db.run(sql, [], (error, rows) => {

})
});"
