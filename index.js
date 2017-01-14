'uset strict';

const http = require('http');
const url = require('url');

const redirectUrl = process.env.REDIRECT_URL;
const port = process.env.PORT || 3000;
const httpCode = process.env.HTTP_CODE || 302;

if (redirectUrl === undefined) {
    throw 'process.env.REDIRECT_URL is not defined';
}

if (Number(httpCode) < 300 || Number(httpCode) > 308) {
    throw `process.env.HTTP_CODE (${httpCode}) is not a valid http redirect status code`;
}

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url);

    res.writeHead(httpCode, {'Location': `${redirectUrl}${parsedUrl.path}`});

    res.end();
});

server.listen(port, (err) => {

    if (err) {
        return;
    }

    console.log(`listening on port ${port}`); // eslint-disable-line
});
