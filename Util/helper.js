const getGallery = (object) => {
    result = []
    
    object.forEach(element => {
        result.push(element["filename"])
    });

    return result
}

const getfile = ()=> {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < 10; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

exports.getFileName = getfile
exports.getGallery = getGallery