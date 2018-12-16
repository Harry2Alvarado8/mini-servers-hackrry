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
	var op = parseInt(request.query.op);
	var msgg = "el siguiente sql se ha ejecutado: "
	switch(op){
		case 1:
			sql = "SELECT ID,codigo,costo,cantidad,nombre FROM PRODUCTO";
			dao.open(sql,[],false,response);
			console.log(msgg,sql);
			break;
		case 2:
			sql = "SELECT ID,NAME FROM TS_PARENT_CATEGORY";
			dao.open(sql,{},false,response);
			console.log("esta funcionando!! - case 2");
			console.log(msgg,sql);
			break;
		case 3:
			sql = "SELECT ID,NAME FROM ts_child_category";
			dao.open(sql,{},false,response);
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

router.post('/signin', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
	  email:req.body.email,
	  password:req.body.password
	};
	
sql = "INSERT INTO ts_user (name,lastname,email,password,phone,phone_2,"+
		"mobile_phone,mobile_phone_2,country,province,district,zone,street,"+
		"detail_address,detail_address_2"+
		") VALUES (:v1,:v2,:v3,:v4,:v5,:v6,:v7,:v8,:v9,:v10,:v11,:v12,:v13,:v14,:v15)";
	//var v0 = 2; // id manual
	var v1 = req.body.first_name;
	var v2 = req.body.last_name;
	var v3 = req.body.email;
	var v4 = req.body.password;
	var v5 = parseInt(req.body.phone);
	var v6 = parseInt(req.body.phone_2);
	var v7 = parseInt(req.body.mobile_phone);
	var v8 = parseInt(req.body.mobile_phone_2);
	var v9 = req.body.country;
	var v10 = req.body.province;
	var v11 = req.body.district;
	var v12 = req.body.zone;
	var v13 = req.body.street;
	var v14 = req.body.detail_address;
	var v15 = req.body.detail_address_2;
	
	dao.open(sql,[v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15],true,response);
   console.log("Se ha ejecutado el insert TS_USER ",response);
   res.end(JSON.stringify(response));
});

app.use(router);

app.listen(3000, function() {
	console.log("Servidor Web corriendo... - http://localhost:3000");
});




// guardar para otro momento - luego revisar
/*
	sql = `INSERT INTO ts_user (
				id,
				name,
				lastname,
				email,
				password,
				phone,
				phone_2,
				mobile_phone,
				mobile_phone_2,
				country,
				province,
				district,
				zone,
				street,
				detail_address,
				detail_address_2
			) VALUES (
				1,
				`+req.body.first_name+`,
				`+req.body.last_name+`,
				`+req.body.email+`,
				`+req.body.password+`,
				`+req.body.phone+`,
				`+req.body.phone_2+`,
				`+req.body.mobile_phone+`,
				`+req.body.mobile_phone_2+`,
				`+req.body.country+`,
				`+req.body.province+`,
				`+req.body.district+`,
				`+req.body.zone+`,
				`+req.body.street+`,
				`+req.body.detail_address+`,
				`+req.body.detail_address_2+`
			)`;
*/