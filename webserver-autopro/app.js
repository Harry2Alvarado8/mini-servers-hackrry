var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var dao = require("./dao");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/product', function(request, response){
	//sql = "SELECT name,password FROM TS_USER";
	//dao.open(sql,[],false,response);
	var opc = parseInt(request.query.opc);
	switch(opc){
		case 1:
			sql = "SELECT NAME, ID, description FROM TS_PROVIDER";
			dao.open(sql,[],false,response);
			break;
		case 2:
			console.log("esta funcionando!! - case 2");
			break;
		default:
			response.contentType('application/json').status(200);
			response.send(JSON.stringify("Opcion no valida."));
}

response.end;
});

app.use(router);

app.listen(3000, function() {
	console.log("Servidor Web - http://localhost:3000");
});