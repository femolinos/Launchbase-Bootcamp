const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.use((req, res) => {
  res.status(404).render('not-found');
});

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server
});

server.get('/', (req, res) => {
  return res.send('courses');
});

server.get('/about', (req, res) => {
  return res.send('about');
});

server.listen(5500, () => {
  console.log('Server rodando');
});