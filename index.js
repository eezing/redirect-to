'uset strict';

const app = require('express')();
const redirectUrl = process.env.REDIRECT_URL;
const port = process.env.PORT || 3000;

app.get('*', (req, res) => res.redirect(301, `${redirectUrl}${req.path}`));

app.listen(port, (err) => err || console.log(`Listening on port ${port}`));
