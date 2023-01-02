const http = require('http');
const fs = require('fs');
const path = require('path');
const handle = require('./request-handler');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Send ./public/index.html to the user.
  fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    if (err) throw err;
    res.end(data);
  });

  // If there is data available to be read from the stream (e.g., user submits form)...
  // ... then output the data to the console and send that data to the user.
  handle(req, res);
});

// Run server.
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running at http://localhost:${PORT}...`);
});