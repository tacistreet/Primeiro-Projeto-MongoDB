const banco = require('mongoose');

const options = {
  useUnifiedTopology: true,
    useNewUrlParser: true
};

const uri = 'mongodb+srv://admin:tacistreet_db_user@cluster0..mongodb.net/banco?retryWrites=true&w=majority';

banco.connect(uri, options)
    .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = banco;