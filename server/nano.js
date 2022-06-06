const nano = require('nano');
const url =
  'https://apikey-v2-23epskwaoah6sy6rvo29zejnn1k4kl1llrrq1ot36mry:69c1d2737d371d9f6b7f6009287e6ccc@784ea086-d974-431c-aa48-7801aa7b2561-bluemix.cloudantnosqldb.appdomain.cloud/';
//username:password@endpoint
const nanodb = nano(process.env.COUCHDB_URL || url); // connect with couchdb
const pandemic = nanodb.use('pandemic-db'); // connect to database

module.exports = { nano, pandemic };
