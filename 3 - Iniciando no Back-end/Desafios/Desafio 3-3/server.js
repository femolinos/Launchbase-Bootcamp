const express = require('express');
const nunjucks = require('nunjucks');
const posts = require('./data');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});


server.get("/", function(req, res) {
  return res.render('courses', { posts });
});

server.get("/about", function(req, res) {
  const about = {
    img_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
    name: "Rocketseat",
    subtitle: "Evolua rápido como a tecnologia",
    description: "Junte-se a milhares de devs e acelere na direção dos seus objetivos.",
    techs: [
      { tech_name: "HTML" },
      { tech_name: "CSS" },
      { tech_name: "Javascript" },
      { tech_name: "React" },
      { tech_name: "React Native" }
    ]
  };

  return res.render('about', { about });
});

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  const post = posts.find(function(post) {
    return post.id == id;
  });

  if(!post) {
    return res.send("Curso não encontrado!");
  }

  return res.render("course", { course: post });
});

server.listen(5000, function() {
  console.log('Server is running');
});

server.use((req, res) => {
  res.status(404).render('not-found');
});