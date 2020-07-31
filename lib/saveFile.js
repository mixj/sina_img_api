var fs = require("fs");

const saveFile = (fileName, data) => {
    let isArray = Array.isArray(data)
    if (isArray) {
        data = data.join('\r\n')
        data += '\r\n'
    }
    fs.appendFile(fileName, data, function (err) {
        if (err) {
            return console.error(err);
        }
    })
}


module.exports = {
    saveFile
};
