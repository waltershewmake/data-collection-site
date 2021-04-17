const {
    exec
} = require('child_process');

console.log("THE PORT IS: " + process.env.PORT);

exec('json-server --watch db.json -p ' + process.env.PORT, (error, stdout, stderr) => {
    if (error) {
        return console.log(`error: ${error.message}`);
    }

    if (stderr) {
        return console.log(`stderr: ${stderr}`);
    }

    // console.log(`stdout: ${stdout}`);
});