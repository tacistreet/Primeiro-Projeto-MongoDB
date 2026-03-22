const banco = require('./conexao');
const LivroSchema = new banco.Schema({
    _id: { type: banco.Schema.Types.ObjectId, auto: true },
    titulo: { type: String, required: true },
    codEditora: { type: String, required: true },
    resumo: { type: String },
    autores: { type: [String] }
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;