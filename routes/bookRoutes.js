const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Afficher tous les livres
router.get('/', async (req, res) => {
  try {
    let query = {};
    
    // Recherche par titre ou auteur
    if (req.query.search) {
      query = {
        $or: [
          { title: { $regex: req.query.search, $options: 'i' } },
          { author: { $regex: req.query.search, $options: 'i' } }
        ]
      };
    }
    
    const books = await Book.find(query);
    res.render('index', { books, search: req.query.search || '' });
  } catch (err) {
    res.status(500).render('index', { books: [], error: 'Erreur lors de la récupération des livres', search: '' });
  }
});

// Afficher le formulaire de création
router.get('/new', (req, res) => {
  res.render('create', { book: {}, errors: {} });
});

// Créer un livre
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.redirect('/');
  } catch (err) {
    let errors = {};
    if (err.errors) {
      for (let field in err.errors) {
        errors[field] = err.errors[field].message;
      }
    }
    res.render('create', { book: req.body, errors });
  }
});

// Afficher les détails d'un livre
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Livre non trouvé');
    }
    res.render('details', { book });
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération du livre');
  }
});

// Afficher le formulaire de modification
router.get('/:id/edit', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Livre non trouvé');
    }
    res.render('edit', { book, errors: {} });
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération du livre');
  }
});

// Modifier un livre
router.post('/:id', async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect('/');
  } catch (err) {
    let errors = {};
    if (err.errors) {
      for (let field in err.errors) {
        errors[field] = err.errors[field].message;
      }
    }
    res.render('edit', { book: { ...req.body, _id: req.params.id }, errors });
  }
});

// Supprimer un livre
router.post('/:id/delete', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Erreur lors de la suppression du livre');
  }
});

module.exports = router;