const os = require('os');
const path = require('path');
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<html><body>`);
  res.write(`<h1>Current user: ${os.userInfo().username}</h1>`);
  res.write(`<h1>OS type: ${os.type()}</h1>`);
  res.write(`<h1>System uptime: ${os.uptime() / 60} minutes</h1>`);
  res.write(`<h1>Current working directory: ${process.cwd()}</h1>`);
  res.write(`<h1>Server file: ${path.basename(__filename)}</h1>`);
  res.end('</body></html>');
});
server.listen(5000, () => {
  console.log('Server listening on port 5000');
});