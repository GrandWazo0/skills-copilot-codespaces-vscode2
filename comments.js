// Create web server
// Create a web server that listens to a port and sends a response to the client.
// The response should be a JSON string with the following structure:
// {
//   "comments": [
//     {
//       "username": "Alice",
//       "content": "I love your blog!",
//       "date": "2018-10-10T18:28:09.369Z"
//     },
//     {
//       "username": "Bob",
//       "content": "This is really cool!",
//       "date": "2018-10-10T18:28:09.369Z"
//     }
//   ]
// }
// The server should respond to GET requests to the /comments path. The server should listen to port 3000.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        comments: [
          {
            username: 'Alice',
            content: 'I love your blog!',
            date: new Date()
          },
          {
            username: 'Bob',
            content: 'This is really cool!',
            date: new Date()
          }
        ]
      })
    );
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        error: 'Not Found'
      })
    );
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});