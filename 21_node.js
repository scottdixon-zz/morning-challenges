/*
  Introducing NodeJS!

  You're looking at a bare bones web server.
  Run the server (node 21_node.js) and open
  localhost:3000/hello in your browser.

  Challenge:
  - Implement a root page. (i.e. '/' should show a message)

  Hints:
  - You'll need to restart the server after each change.

  Beast mode:
  - Can you get your root page showing html like h1?

  Hints:
  - You'll need to set the Content-Type so the
    browser knowns you're sending it HTML.

*/

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {

  response.setHeader('content-type', 'text/html');

  console.log('Woop, new request!', request.method, request.url);

  if (request.url === '/hello') {
    response.end('world')
  }

  if (request.url === '/') {
    response.end('<h1>Root Page</h1>')
  }

  response.end('Not found!!')
}

const server = http.createServer(requestHandler)



server.listen(port, () => {
  console.log(`server is listening on ${port}`)
})
