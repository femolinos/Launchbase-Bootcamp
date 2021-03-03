const fs = require('fs');
const data = require('./data.json');

exports.post = function(req, res) {
  console.log(req.body);

  const keys = Object.keys(req.body);
  console.log(keys);

  for(key of keys) {
    if(req.body[key] == '') {
      return res.send('Por favor, preencha todos os campos!');
    }
  }

  let { avatar_url, name, birth, education_level, class_type, acting_field } = req.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    education_level,
    class_type,
    acting_field,
    created_at
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Erro ao salvar o arquivo!');

    return res.redirect('/teachers');
  });
}