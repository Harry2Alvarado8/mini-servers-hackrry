var objoracle = require('oracledb');

cns = {
	user: "USER_AUTOPRO_2",
	password: "12345",
	connectString: "localhost/XE"
};

function error(err,rs,cn){
	if(err){
		console.log(err.message);
		rs.contentType('application/json').status(500);
		rs.send(err.message);
		if(cn!=null) close(cn);
		return -1;
	} else
		return 0;
}

function open(sql,binds,dml,rs){
	objoracle.getConnection(cns,function(err,cn){
		if(error(err,rs,null) == -1) return;
		cn.execute(sql,binds,{autoCommit: dml},function(err,result){
			if(error(err,rs,cn) == -1) return;
				try{
					rs.contentType('application/json').status(200);
				}catch(err){
					console.log("Ha ocurrido algo raro! - application/json");
				}
				/*
				try{
					rs.contentType('application/x-www-form-urlencoded').status(200);
				}catch(err){
					console.log("Ha ocurrido algo raro! - x-www-form-urlencoded");
				}
			*/
			try{
				if(dml)
					rs.send(JSON.stringify(result.rowsAffected));
				else{
					console.log(result.metaData);
					//rs.send(JSON.stringify(result.rows));
					rs.send(JSON.stringify(result.rows));
					//console.log(JSON.stringify(result.rows));
				}
				}catch(err){
					console.log("Ha ocurrido algo raro! - rowAffected");
				}

			close(cn);
		});
	})
}

function close(cn){
	cn.release(
		function(err){
			if(err){console.error(err.message);}
		}
	);
}

exports.open = open;
exports.close = close;