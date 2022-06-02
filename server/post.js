const connection = require('express');
const bodyparser = require('body-parser');
const app = connection();
const port = 8000;
const cors = require('cors');
const dbconnection = require('./app');
app.use(connection.static('public'));
app.use(bodyparser.json());
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

app.post('/login', (request, response) => {
  console.log(request);
  var object = {
    email: request.body.email,
    password: request.body.password,
    // type: 'login',
  };

  dbconnection.insert(object);
  console.log('Data added');
});
app.post('/contact', (request, response) => {
  console.log(request);
  var objectnew = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    address: request.body.address,
    email: request.body.email,
    mobile: request.body.mobile,
    help: request.body.help,
    information: request.body.information,
    // type: 'contact',
  };

  dbconnection.insert(objectnew);
  console.log('Data added');
});
app.post('/signup', (request, response) => {
  console.log(request);
  var objectsign = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    confirmpswd: request.body.confirmpswd,
    // type: 'signup',
  };

  dbconnection.insert(objectsign);
  console.log('Data added');
});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`htpp://localhost:8000`);
});
