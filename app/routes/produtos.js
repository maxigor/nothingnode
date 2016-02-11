module.exports = function(app){
   app.get('/produtos', function(req, res){
      var mysql = require('mysql');
      var connect = mysql.createConnection({
         host : 'locahost',
         user : 'root',
         password : '',
         database : 'casadocodigo'
      })
      connect.query('select * from livros');
      connection.end();

   })
}
