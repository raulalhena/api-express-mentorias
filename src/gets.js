import { users } from '../data/users.js';
import { posts } from '../data/posts.js';

export const getAllUsers = function(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ 
    message: "Users retrieved successfully",
    users: users 
  }));
}

export const getAllPosts = function(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ 
    message: "Posts retrieved successfully",
    users: posts
  }));
}