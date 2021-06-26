const Sequelize = require('sequelize');
const connection = require('./database');

const Negocio = connection.define('empresas', {
    razaoSocial: {
    type: Sequelize.STRING,
    allowNull: false,
  },
    inscMunicipal: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  inscEstadual: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  nomeFantasia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nomeResponsavel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rua: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  facebook: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  youtube: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instagram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  twitter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  whatsapp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tags: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});

Negocio.sync({ force: false }).then(() => {});
module.exports = Negocio;