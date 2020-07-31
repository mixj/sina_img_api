const request = require('request');

function Http(params) {
    return new Promise((resolve, reject) => {
        let { url, method = "GET", data } = params
        let option = {
            url,
            json: true,
            timeout:20000,
            method,
            data
        }
        request(option, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body)   // 返回response的内容
            } else {
                reject(error);   // 返回错误信息
            }
        });
    })
}

module.exports = Http