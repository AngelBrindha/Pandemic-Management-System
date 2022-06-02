const Cloudant = require('@cloudant/cloudant');
const { type } = require('express/lib/response');
var url =
  'https://784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/';
var username = 'apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry';
var password = '69c1d2737d371d9f6b7f6009287e6ccc';
var _tmp = 'name';
var cloudant = Cloudant({ url: url, username: username, password: password });

insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use('logindb')
    .insert(paramsvalue)
    .then((data) => {
      console.log('Login Data Inserted into CDB' + data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { insert };
