// myscript.js

var oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "USER_AUTOPRO",
    password      : "12345",
    connectString : "localhost/XE"
  },
  function(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(/*
      `SELECT manager_id, department_id, department_name
       FROM departments
       WHERE manager_id = :id`,
      [103],  // bind value for :id
	  */
	       // `+data+`
	  `SELECT ID, nombre, costo, codigo FROM producto`,
      function(err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection);
      });
  });

function doRelease(connection) {
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}