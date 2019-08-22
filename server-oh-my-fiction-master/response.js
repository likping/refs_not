/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 17:29:14
 * @LastEditTime: 2019-08-21 18:23:42
 * @LastEditors: Please set LastEditors
 */
var ko = require('./request');
ko.req.end();
const http = require("http");
let server = http.Server();
server.on("request", function (req, res) {
    res.end(ko.data);
})
server.listen(3200, () => {
    console.log("http://localhost:3200");
})

