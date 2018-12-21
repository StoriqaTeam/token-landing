const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

global.server = express();

server.use(bodyParser.json());

server.use(cors({
  origin: [/\.storiqa\.com$/, /localhost:10000$/],
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

const PORT = 10001;
server.listen(PORT);

console.log(`Token sale backend server listening on ${PORT}`);
