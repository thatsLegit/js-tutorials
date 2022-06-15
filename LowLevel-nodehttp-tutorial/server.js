const http = require('http');

let todos = [{
  id: 3,
  text: 'todo one',
}];

const server = http.createServer((req, res) => {
  //body of the request
  let body = [];
  const { method, url } = req;

  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', () => {

    //A Buffer is a stream of binary chunks of data
    //we concatenate them together an then toString.
    body = Buffer.concat(body).toString();

    //default response
    let status = 404;
    let response = {
      success: false,
      data: null
    };

    if (method === 'GET' && url === "/todos") {
      status = 200;
      response = {
        success: true,
        data: todos
      };
    }

    if (method === 'POST' && url === "/todos") {
      const { id, text } = JSON.parse(body);
      todos.push({ id, text });
      status = 201;
      response.success = true;
    }

    //Preparing the response, header and body typically
    res.writeHead(status, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify(response)
    );

  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
