var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

/*
https://oracle.github.io/node-oracledb/doc/api.html#getstarted
https://www.oracle.com/technetwork/es/articles/database-performance/restful-node-3813084-esa.html
https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
*/
