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

router.get('/prod', function(request, response){
	//var op = parseInt(request.query.opc);
	var msgg = "el siguiente sql se ha ejecutado: ";
	sql = "SELECT ID,codigo,costo,cantidad,nombre FROM PRODUCTO";
	dao.open(sql,[],false,response);

	console.log(msgg,sql);
	response.end;
});

router.post('/prod', function(request, response){
	//var op = parseInt(request.query.opc);
	var msgg = "el siguiente sql se ha ejecutado: ";
	sql = "SELECT ID,codigo,costo,cantidad,nombre FROM PRODUCTO";
	dao.open(sql,[],false,response);

	console.log(msgg,sql);
	response.end;
});

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.use(router);

app.listen(3000, function() {
	console.log("Servidor Web corriendo... - http://localhost:3000");
});
