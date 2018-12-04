//webserver.js

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var dao = require("./dao");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/product', function(request, response){
	var opc = parseInt(request.query.opc);
	var msgg = "el siguiente sql se ha ejecutado: "
	switch(opc){
		case 1:
			sql = "SELECT ID,NAME FROM TS_PROVIDER";
			dao.open(sql,{},false,response);
			console.log(msgg,sql);
			break;
		case 2:
			console.log("esta funcionando!! - case 2");
			console.log(msgg,sql);
			break;
		case 3:
			console.log("esta funcionando!! - case 3");
			console.log(msgg,sql);
			break;
		case 4:
			console.log("esta funcionando!! - case 4");
			console.log(msgg,sql);
			break;
		case 5:
			console.log("esta funcionando!! - case 5");
			console.log(msgg,sql);
			break;
		case 6:
			console.log("esta funcionando!! - case 6");
			console.log(msgg,sql);
			break;
		default:
			response.contentType('application/json').status(200);
			response.send(JSON.stringify("Opcion no valida."));
	}

response.end;
});

app.use(router);

app.listen(3000, function() {
	console.log("Servidor Web corriendo... - http://localhost:3000");
});