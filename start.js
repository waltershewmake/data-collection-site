const {
    exec
} = require('child_process');

exec('json-server --watch db.json -p ' + process.env.PORT, (error, stdout, stderr) => {
    if (error) {
        return console.log(`error: ${error.message}`);
    }

    if (stderr) {
        return console.log(`stderr: ${stderr}`);
    }

    // console.log(`stdout: ${stdout}`);
});