console.log("Module.exports sendo carregado");
var app = require('express')();
app.set('view engine', 'ejs');

module.exports = function() {
   return app;
}
