const { exec } = require('child_process');
var fs = require('fs')

var config = JSON.parse(fs.readFileSync(__dirname+'/config.json').toString())

exec(`wakeonlan -i ${config.host} -p ${config.port} ${config.mac_address}`, (err, stdout, stderr) => {
    console.log(stdout)
})