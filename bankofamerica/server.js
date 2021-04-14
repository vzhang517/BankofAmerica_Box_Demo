const BoxSDK = require('box-node-sdk');
const jsonConfig = require('./config.json');
const sdk = BoxSDK.getPreconfiguredInstance(jsonConfig);

const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


var client = sdk.getAppAuthClient('enterprise');
  

app.post('/upload',function(req, res) {
 console.log(req.body);
  var reqName = String(req.name);
  client.folders.create('0', reqName)
  .then(folder => {
    var stream = fs.createReadStream(req.files.file.path);
    client.files.uploadFile(folder.id, req.files.file.name, stream)

  });


      return res.status(200)


});


app.listen(8000, function() {

    console.log('App running on port 8000');

});