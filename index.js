const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const Negocio = require('./database/Negocio');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

const connection = require('./database/database');

connection
  .authenticate()
  .then(() => {
    console.log('MySQL: Conexão feita com sucesso!');
  }).catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {

  Negocio.findAll({
    raw: true, 
    order: [[ 'id', 'ASC']]
  }).then((empresas) => {
    res.render('index', {
      empresas: empresas
    });
  });
});


app.get('/novo', (req, res) => {
  res.render('adicionar');
});

app.get('/visualizar/:id', (req, res) => {
    let {id} = req.params;
    Negocio.findAll({
      raw: true, 
      where: { id: id}
    }).then((empresas) => {
      res.render('preview', {
        empresas: empresas
      });
    });
});




app.post('/salvar', (req, res) => {
    const razaoSocial = req.body.razaoSocial;
    const inscMunicipal= req.body.IscMunicipal;
    const cnpj= req.body.cnpj;
    const inscEstadual= req.body.inscEstadual;
    const nomeFantasia= req.body.nomeFantasia;
    const nomeResponsavel= req.body.nomeResponsavel;
    const telefone= req.body.telefone;
    const email= req.body.email;
    const rua= req.body.rua;
    const numero= req.body.numero;
    const complemento= req.body.complemento;
    const bairro= req.body.bairro;
    const cidade= req.body.cidade;
    const estado= req.body.estado;
    const cep= req.body.cep;
    const url= req.body.url;
    const facebook= req.body.facebook;
    const youtube= req.body.youtube;
    const instagram= req.body.instagram;
    const twitter= req.body.twitter;
    const whatsapp = req.body.whatsapp;
    const tags= req.body.tags;

    
      Negocio.create({
      razaoSocial: razaoSocial,
      inscMunicipal: inscMunicipal,
      cnpj: cnpj, 
      inscEstadual: inscEstadual,
      nomeFantasia: nomeFantasia,
      nomeResponsavel: nomeResponsavel,
      telefone: telefone,
      email: email,
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      cep:cep,
      url: url,
      facebook: facebook,
      youtube: youtube,
      instagram: instagram,
      twitter: twitter,
      whatsapp: whatsapp,
      tags: tags


    }).then(() => {
    res.redirect('/');
    }).catch((error) => {
    console.error(`Ocorreu um erro, ao salvar sua empresa -  ${error}`);
    });
});




app.listen(9000, () => console.log('app rodando: http://localhost:9000'));