var express = require('express');
var router = express.Router();
var payme = require('../config/payup')
const base64 = require('node-base64-image');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var gif = await payme.getGif();

    const options = {
        string: true,
        headers: {
            "User-Agent": "my-app"
        }
    };

    let image = await base64.encode(gif.url, options);
    await base64.decode(image, { fname: 'example', ext: 'gif' });
    console.log(typeof(image))
    image = "data:image/gif;base64,".concat(image)
    res.render('index', { title: 'Pay me', f: image });
});

module.exports = router;