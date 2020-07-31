const Sina = require('./lib/Sina');
var fs = require("fs");
const sina = new Sina()
let containerid = '1076032020025832'
let since_id = undefined
let params = {
    containerid,
    since_id
}
sina.getSuperList(params)