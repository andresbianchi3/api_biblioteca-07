const express = require("express");
const router = express.Router();
const libroController = require("../controllers/libroController");
const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:libros"), libroController.getAllLibros);
router.get("/:id", requiredScopes("read:libros"), libroController.getLibroById);
router.post("/", requiredScopes("write:libros"), libroController.createLibro);
router.put("/:id", requiredScopes("write:libros"), libroController.updateLibro);
router.delete("/:id", requiredScopes("write:libros"), libroController.deleteLibro);

module.exports = router;
