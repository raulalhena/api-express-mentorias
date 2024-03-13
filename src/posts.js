import { posts } from "../data/posts.js";
import { users } from "../data/users.js";

export const createUser = function(req, res) {
  let body = '';
  let message = 'Action successfull';
  const contentType = { 
    'content-type': 'application/json' 
  }
  
  req.on('data', async function(chunk) {
    body += chunk;
    const newUser = JSON.parse(body);
    if(newUser.email && newUser.name){
      users.push(newUser);
    } else {
      message = 'Error creating user';
    }
  });

  req.on('end', function(){
    if(message.search(/Error/)) {
      res.writeHead(201, contentType);
      res.end(JSON.stringify({
        message: message,
        user: users.slice(-1)
      }));
    } else {
      res.writeHead(400, contentType);
      res.end(JSON.stringify({
        message: message
      }));
    }
  });
}

export const createPost = function(req, res) {
  let body = '';
  let message = 'Action successfull';
  const contentType = { 
    'content-type': 'application/json' 
  }
  
  req.on('data', async function(chunk) {
    body += chunk;
    const newPost = JSON.parse(body);
    if(newPost.title && newPost.description){
      posts.push(newPost);
    } else {
      message = 'Error creating post';
    }
  });

  req.on('end', function(){
    if(message.search(/Error/)) {
      res.writeHead(201, contentType);
      res.end(JSON.stringify({
        message: message,
        post: posts.slice(-1)
      }));
    } else {
      res.writeHead(400, contentType);
      res.end(JSON.stringify({
        message: message
      }));
    }
  });
}