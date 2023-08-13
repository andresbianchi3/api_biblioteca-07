const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// ... resto del código ...


const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  anioPublicacion: Number,
  genero: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;
