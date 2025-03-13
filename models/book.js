const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est obligatoire'],
    minlength: [3, 'Le titre doit contenir au moins 3 caractères']
  },
  author: {
    type: String,
    required: [true, 'L\'auteur est obligatoire'],
    minlength: [3, 'L\'auteur doit contenir au moins 3 caractères']
  },
  year: {
    type: Number,
    required: [true, 'L\'année de publication est obligatoire'],
    validate: {
      validator: function(value) {
        return value <= new Date().getFullYear();
      },
      message: props => `${props.value} ne peut pas être supérieure à l'année actuelle`
    }
  },
  summary: {
    type: String,
    maxlength: [500, 'Le résumé ne peut pas dépasser 500 caractères']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);