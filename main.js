// const http = require("http"); // it is a servermodule
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("massage.text",{encoding : "utf-8"}, (err,data)=>{
//       if(err) {
//         console.log(err);
//       }

//       res.write("<html>");
//     res.write("<head><title>Enter message</title></head>");
//     res.write(`<body>${data}</body>`)
//     res.write(
//       '<body><form action="/massage" method="POST"><label for="file"></label><input type="text" name="massage" id="1"><button type="submit">Submit</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   })
//   } else if (req.url === "/massage" && req.method === "POST") {
//     const body = [];
//     req.on('data', (chunk) => {
//       body.push(chunk);
//     })
//     return req.on('end', () =>{
//       const parsebody = Buffer.concat(body).toString();
//       const massage = parsebody.split('=')[1];
//       fs.writeFile('massage.text', massage,err => {
//         if(err) {
//           console.log(err);
//         }
//         res.statusCode = 302;
//       res.setHeader('location', '/');

//        res.end();

//       });
      
//     })
//   } else {
//     res.writeHead(404);
//     res.write("<html>");
//     res.write("<head><title>Not Found</title></head>");
//     res.write("<body><h1>404 - Not Found</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }
// });

// server.listen(3000, "127.0.0.1");




const http = require("http");

// core module, relative path
const routes =  require('./routes'); 

const server = http.createServer(routes.handler);

server.listen(5000);