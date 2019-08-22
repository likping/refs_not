/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 15:47:52
 * @LastEditTime: 2019-08-21 15:47:52
 * @LastEditors: your name
 */
 /*
  * @Description: In User Settings Edit
//  * @Author: your name
//  * @Date: 2019-08-21 15:47:52
 * @LastEditTime: 2019-08-21 18:10:07
 * @LastEditors: Please set LastEditors
  */

// // var http = require("http");

// // //Server对象
// // let server = http.Server();
// // server.on("request", function (req, res) {
// //     if (req.url == "/") {
// //         res.writeHead(200, { 'Content-Type': 'text/html' }); 
// //         res.end("hello");
// //     }
// //     else if (req.url = "/ps") {
// //         res.writeHead(200, { 'Content-Type': 'text/html' });
// //         res.write("<span>Hello span</span>");
// //         res.end(); 
// //     }
// // })
// // server.listen(3200, () => {
// //     console.log("http://localhost:3200/")
// // })

// // const https = require('https');
// // var hh;
// // const options = {
// //     hostname: 'www.sina.com.cn',
// //     method: 'GET'
// // };
// // const req = https.request(options, (res) => {
// //     let chunk = " ";
// //     console.log('状态码:', res.statusCode);
// //     console.log('请求头:', res.headers);
// //     res.on('data', (d) => {
// //         chunk += d;

// //     });
// //     res.on("end", ()=>{
// //         hh = chunk;
// //     })
// // });
// // req.on('error', (e) => {
// //     console.error(e);
// // });
// // req.end();
// const http = require('http');
// var hh = "";
// var req = http.request({
//     host: "www.nodeclass.com",
//     method:"GET"
// }, function (res) {
//         let chunk = " ";
//         res.on("data", (d) => {
//             chunk += d;
//         })
//         res.on("end", () => {
//             hh = chunk;
//         })
// })
// req.on('error', (e) => {
//     console.error(e);
// });
// req.end();
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(hh);
// }).listen(3200);

// 异步同步问题
let ss = require("./request");
console.log(ss);
