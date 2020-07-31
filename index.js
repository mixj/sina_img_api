const Sina = require('./lib/Sina');
const sina = new Sina()
let containerid = '1076032020025832'
let since_id = undefined
let params = {
    containerid,
    since_id
}
sina.getSuperList(params)