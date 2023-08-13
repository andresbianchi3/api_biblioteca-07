const Libro = require("../models/libroModel");

function handleError(res, error, message) {
  console.error(error);
  res.status(500).json({ error: message });
}

exports.getAllLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (error) {
    handleError(res, error, "Error al obtener los libros");
  }
};

exports.getLibroById = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.status(200).json(libro);
  } catch (error) {
    handleError(res, error, "Error al obtener el Libro");
  }
};

exports.createLibro = async (req, res) => {
  try {
    const nuevoLibro = await Libro.create(req.body);
    await nuevoLibro.save();
    res.status(201).json({ message: "Libro creado exitosamente", libro: nuevoLibro });
  } catch (error) {
    handleError(res, error, "Error al crear el Libro");
  }
};


exports.updateLibro = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.status(200).json(libro);
  } catch (error) {
    handleError(res, error, "Error al actualizar el Libro");
  }
};

exports.deleteLibro = async (req, res) => {
  try {
    const libroId = req.params.id;

    const libroEliminado = await Libro.findByIdAndRemove(libroId);

    res.status(200).json(libroEliminado);
  } catch (error) {
    handleError(res, error, "Error al eliminar el Libro");
  }
};
