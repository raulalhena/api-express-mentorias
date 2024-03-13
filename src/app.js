import http from 'http';

import { getAllUsers } from './gets.js';
import { getAllPosts } from './gets.js';
import { createUser } from './posts.js';
import { createPost } from './posts.js';

const host = 'localhost';
const port = 4000;


const requestListener = function(req, res) {

  switch(req.url) {
    case '/users':
      if(req.method === 'GET') getAllUsers(req, res);
      if(req.method === 'POST') createUser(req, res);
      break;
    case '/posts':
      if(req.method === 'GET') getAllPosts(req, res);
      if(req.method === 'POST') createPost(req, res);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ 
        message: "Resource not found" 
      }));
      break;
  }
 
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server listening in port ${port}`);
});

export { server };