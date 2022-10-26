const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Cache-Control': 'public, s-maxage=600',
    });
    res.write('<html><body><p>Hello world.</p></body></html>');

    res.end();
});

console.log('Listening');
server.listen(80);
