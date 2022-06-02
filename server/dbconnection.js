const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection = require('./nano');
const app = express();
const port = 8000;
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
app.use(bodyParser.json());

app.post('/signup', function (req, res) {
  var signupobject = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    acceptTerms: req.body.acceptTerms,
    type: 'signup',
  };

  console.log('data from angular', signupobject);
  dbconnection.pandemic.insert(signupobject).then((data) => {
    console.log('data inserted successfully ', data);
  });
});

app.get('/getdata/:id', (req, res) => {
  console.log('email:', req.params.id);
  console.log('password:', req.params.id);
  var object = {
    selector: {
      email: req.params.id,
      type: 'signup',
    },
  };

  dbconnection.pandemic
    .find(object)
    .then((data) => {
      console.log('data fetch from db', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('error', err);
    });
});
app.get('/getadmindata/:id', (req, res) => {
  var adminobject = {
    selector: {
      type: 'admin',
    },
  };
  console.log(adminobject);
  dbconnection.pandemic
    .find(adminobject)
    .then((data) => {
      console.log('data fetch from db', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('error', err);
    });
});

app.post('/contact', function (req, res) {
  var contactobject = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    email: req.body.email,
    mobile: req.body.mobile,
    help: req.body.help,
    information: req.body.information,
    type: 'contact',
  };
  console.log('data from angular', contactobject);
  dbconnection.pandemic.insert(contactobject).then((data) => {
    console.log('data inserted successfully ', data);
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
