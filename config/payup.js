var giphy = require('giphy-api')('z10MTOwpLD8TbIOl27g4ohdDK9R3RiWt');

exports.getGif = async() => {

    return giphy.random('pay-me').then(res => {
        var gif = {}
        gif.url = res.data.images.original.url
        gif.embedUrl = res.data.embed_url;
        return gif;
    })


}