const express = require('express');
const nunjucks = require('nunjucks');
const receitas = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

/* ROTAS */
server.get('/', function(req, res) {
  return res.render('index', { receitas });
});

server.get('/recipes', function(req, res) {
  return res.render('receitas', { receitas });
});

server.get('/recipes/:index', function(req, res) {
  const recipes = receitas;
  const recipeIndex = req.params.index;

  if(recipeIndex < 0 || recipeIndex >= recipes.length) {
    return res.send('Receita inválida!');
  }

  return res.render('receita', { receita: recipes[recipeIndex] });
});

server.get('/about', function(req, res) {
  return res.render('sobre');
});

server.listen(5000, () => {
  console.log('Server ligado!');
});