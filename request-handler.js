module.exports = handle;

// If there is data available to be read from the stream (e.g., user submits form)...
function handle(req, res) {
  req.on('readable', () => {
    // ... then read the stream...
    let chunk;
    while (null !== (chunk = req.read())) {
      // ... and output the data to the console...
      console.log(chunk.toString());
      // ... and send that data to the user.
      res.end(chunk.toString());
    }
  })
};