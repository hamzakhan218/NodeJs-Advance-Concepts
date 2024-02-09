const express = require('express');
const cluster = require('cluster');

if (cluster.isMaster){
    // causes index.js to be executed in child mode
    cluster.fork();
}
else{
    // Im a child process and i act as a server
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    })
}
