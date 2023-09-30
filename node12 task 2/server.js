const http = require('http');
const { getMessage } = require('./personalmodule');

const server = http.createServer((req, res) => {
    const username = 'Ім’я_користувача';

    const message = getMessage(username);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<html><body><h1>${message}</h1></body></html>`);
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
