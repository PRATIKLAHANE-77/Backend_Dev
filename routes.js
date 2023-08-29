const fs = require('fs');

// Define the request handler logic as a function
const requestHandler = (req, res) => {
  if (req.url === "/") {
    fs.readFile("massage.text", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }

      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<form action="/massage" method="POST"><label for="file"></label><input type="text" name="massage" id="1"><button type="submit">Submit</button></form>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (req.url === "/massage" && req.method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsebody = Buffer.concat(body).toString();
      const massage = parsebody.split('=')[1];
      fs.writeFile('massage.text', massage, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader('location', '/');
        res.end();
      });
    });
  } else {
    res.writeHead(404);
    res.write("<html>");
    res.write("<head><title>Not Found</title></head>");
    res.write("<body><h1>404 - Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
};

// Export the requestHandler function
// module.exports = requestHandler;

// module.exports = {handler:requestHandler,
// sometext:'some hard coded text'};


// module.exports.handler = requestHandler;
// module.exports.sometext = 'some hard coded text'

exports.handler = requestHandler;
exports.sometext = 'some hard coded text';

