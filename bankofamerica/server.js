const BoxSDK = require('box-node-sdk');
const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
app.use(cors())

// Initialize the SDK with your app credentials
var sdk = new BoxSDK({
    clientID: 'o3e6fancjaw5pmwazbszs7zipjgzgk15',
    clientSecret: 'XZFsdZJLtVbATKswVkD0rqomNtBo8sJC'
  });
  


  
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

app.listen(8000, function() {

    console.log('App running on port 8000');

});