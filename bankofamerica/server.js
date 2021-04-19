const BoxSDK = require('box-node-sdk');
const jsonConfig = require('./config.json');
const sdk = BoxSDK.getPreconfiguredInstance(jsonConfig);
const fs = require('fs');

const express = require('express');
const app = express();
const formidableMiddleware = require('express-formidable');
const cors = require('cors');
app.use(cors())
app.use(formidableMiddleware());

var client = sdk.getAppAuthClient('enterprise');

app.post('/upload',function(req, res) {

  var accountNum = req.fields.accountNum;
  var filename = req.files.file.name;
  var stream = fs.createReadStream(req.files.file.path);

  // check to see if folder already exists for account number
  client.search.query(
    accountNum,
    {
      type: 'folder',
      content_types: 'name',
      offset: 0,
      limit: 1,
      fields: 'id'
    })
    .then(results => {
      if (results["total_count"] > 0) {

        var folderId = results["entries"][0]["id"];

        // see if same loan file already exists in account folder
        client.search.query(
          filename,
          {
            type: 'file',
            content_types: 'name',
            ancestor_folder_ids: folderId,
            offset: 0,
            limit: 1,
            fields: 'id, etag',
          })
          .then(results =>{
            // if file exists, delete it and upload the new version of the file
            if (results["total_count"] > 0) {

              var fileId = results["entries"][0]["id"];
              var matchetag = results["entries"][0]["etag"];

              client.files.delete(fileId, { etag: matchetag })
              .then(() => {
                client.files.uploadFile(folderId, filename, stream)
                res.send({ status: "success" });
              })
              .catch(err => {
                if (err.statusCode === 412) {
                  // Precondition failed — the file was modified before the deletion was processed
                  // Read the file again to ensure it is safe to delete and then retry


                }
              });
            }

            else{
              client.files.uploadFile(folderId, filename, stream)
              res.send({ status: "success" });
            }

          })


      }
    
    // If no folder exists for account number, create a new folder for it and upload the file into the folder 
    else
    {
      client.folders.create('0', accountNum)
      .then(folder => {
				client.files.uploadFile(folder.id, filename, stream)
        res.send({ status: "success" });

      });
    }

  });


});

app.listen(8000, function() {

    console.log('App running on port 8000');

});