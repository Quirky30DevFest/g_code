var app = require('express')(); // Create an instance of an Express app
var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('TodoItem'); // Create a table for 'TodoItem' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


// Create connection to database
var config = {
  userName: 'sihle', // update me
  password: '@thando1982', // update me
  server: 'sihle-1.database.windows.net', // update me
  options: {
      database: 'sihle-1' //update me
  }
}

var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
    if (err) {
        console.log(err)
    }
    else{
        updateInDatabase()
    }
});

connection.execSql(request);