const { exec } = require('child_process');
const express = require('express')
const app = express();
var fs = require('fs')

var config = JSON.parse(fs.readFileSync(__dirname+'/config.json').toString())
app.listen(8080);

app.get('/wake',(req, res, next) => {
    exec(`wakeonlan -i ${config.host} -p ${config.port} ${config.mac_address}`, (err, stdout, stderr) => {
        res.json({err,stdout,stderr})
    })
})

