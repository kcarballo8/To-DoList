const http = require('http');
const app = require('./app');
const config = require('./config');


const server = http.createServer(app);

server.listen(8000, () => {
    console.log(`Listening on port 8000...`)
});

