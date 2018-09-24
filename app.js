var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    server = http.createServer();

server.on('request', (req, res) => {
    var index = req.url.lastIndexOf('.');
    var contentType = req.url.substr(index + 1);
    switch (contentType) {
        case '/' :
            contentType = 'text/html';
            break;
        case 'js':
            contentType = 'text/javascript';
            break;
        case 'css':
            contentType = 'text/css';
            break;
        case 'ico':
            contentType = 'image/x-icon';
            break;
        default:
            contentType = 'text/plain;charset=UTF-8';
            break;
    }
    if (req.url === '/') {
        req.url = "index.html";
    }
    let filePath = path.join(__dirname, '/', req.url);
    res.writeHead(200, {
        'Content-type': contentType
    });
    console.log(contentType);
    // console.log(req);
    console.log(req.url);
    console.log(filePath);
    var readStream = fs.createReadStream(filePath);
    // console.dir(readStream);
    readStream.pipe(res);
}).listen(4000, "127.0.0.1");




