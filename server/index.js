const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./nano');
let app = express();
app.disable('x-powered-by');
let helmet = require('helmet');
app.use(helmet.hidePoweredBy());

const port = 8000;
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
app.use(bodyParser.json());

app.post('/signup', function (req, _res) {
  const signUpObject = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    acceptTerms: req.body.acceptTerms,
    type: 'signup',
  };

  console.log('data from angular', signUpObject);
  dbConnection.pandemic.insert(signUpObject).then((data) => {
    console.log('data inserted successfully ', data);
  });
});

app.get('/getdata/:id', (req, res) => {
  console.log('email:', req.params.id);
  console.log('password:', req.params.id);
  const object = {
    selector: {
      email: req.params.id,
      type: 'signup',
    },
  };

  dbConnection.pandemic
    .find(object)
    .then((data) => {
      console.log('data fetch from db', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('error', err);
    });
});
app.get('/getadmindata/:id', (_req, res) => {
  const adminObject = {
    selector: {
      type: 'admin',
    },
  };
  console.log(adminObject);
  dbConnection.pandemic
    .find(adminObject)
    .then((data) => {
      console.log('data fetch from db', data);
      res.send(data);
    })
    .catch((err) => {
      console.log('error', err);
    });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
