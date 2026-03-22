const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dados');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try {
        await incluir(req.body);
        res.json({ message: 'Livro incluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao incluir livro.' + err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await excluir(req.params.id);
        res.json({ message: 'Livro excluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao excluir livro.' + err });
    }
});

module.exports = router;