const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars2.githubusercontent.com/u/40651456?s=460&u=f4a727ff0e82bc246e43aa1e86c7a429e3c3fe61&v=4",
    name: "Felipe Molinos",
    role: "Web Developer",
    description: "Programador Front-End, no momento aprendendo o framework React.",
    links: [
      { name: "Github", url: "https://github.com/femolinos" },
      { name: "Twitter", url: "https://twitter.com/femolinos" },
      { name: "LinkedIn", url: "https://linkedin.com/in/felipe-molinos" },
    ]
  }

  return res.render('about', { about });
});

server.get("/portfolio", function(req, res) {
  return res.render('portfolio', {items: videos});
});

server.get("/video", function(req, res) {
  const id = req.query.id;

  const video = videos.find(function(video) {
    return video.id == id;
  });

  if(!video) {
    res.send("Video not found!");
  }

  res.render("video", { item: video });
});

server.listen(5000, function() {
  console.log('Server is running');
});