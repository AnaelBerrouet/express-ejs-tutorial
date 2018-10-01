// app.js

// Require and instantiate express
const app = require('express')();

// fake posts to simulate a database
const posts = [
      {
        id: 1,
        author: 'John',
        title: 'Templating with EJS',
        body: 'Blog post number 1'
      },
      {
        id: 2,
        author: 'Drake',
        title: 'Express: Starting from the Bottom',
        body: 'Blog post number 2'
      },
      {
        id: 3,
        author: 'Emma',
        title: 'Streams',
        body: 'Blog post number 3'
      },
      {
        id: 4,
        author: 'Cody',
        title: 'Events',
        body: 'Blog post number 4'
      }
    ];

// set the view engine to ejs
app.set('view engine', 'ejs');

// blog home page
app.get('/', function(request, response) {
  // render home.ejs with the list of posts
  response.render('home', {posts: posts});
});

// blog post
app.get('/post/:id', function(request, response) {
  // find the post int the "posts" array
  const post = posts.filter( function(post) {
    return post.id === request.params.id;
  })[0];

  // render post.ejs template with the post content
  respons.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

app.listen(8080);

console.log('listening on port 8080');






