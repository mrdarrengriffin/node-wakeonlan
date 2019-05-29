const { exec } = require('child_process');
const express = require('express')
const app = express();
var fs = require('fs')
var https = require('https')

const options = {
    key: fs.readFileSync(__dirname+'/cloudflare.key'),
    cert: fs.readFileSync(__dirname+'/cloudflare.pem')
  };

var config = JSON.parse(fs.readFileSync(__dirname+'/config.json').toString())

https.createServer(options,app).listen(8080)

app.get('/wake',(req, res, next) => {
    exec(`wakeonlan -i ${config.host} -p ${config.port} ${config.mac_address}`, (err, stdout, stderr) => {
        res.json({err,stdout,stderr})
    })
})

