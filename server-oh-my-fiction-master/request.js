/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 17:29:04
 * @LastEditTime: 2019-08-21 18:16:33
 * @LastEditors: Please set LastEditors
 */
const https = require("https");
var ko = new Object();
var option = {
    host: "www.sina.com.cn",
    method:'GET'
}
var request = https.request(option, function (res) {
    let chunk = " ";
    // console.log(res);
    res.on('data', (d) => {
        chunk += d;
    })
    res.on('end', () => {
        
        ko.data = chunk;
       
    })
})
request.on("error", (e) => {
    console.error(e);
})
ko.req = request;

module.exports = ko;





