const Contenedor = require("../Contenedor");
const { Router } = require("express");
const router = Router();

const productos = new Contenedor();

// 1 GET '/api/productos' -> devuelve todos los productos.

router.get("/productos", (req, res) => {
  const response = productos.getAll();
  if (response.length) {
    res.status(200).json(response);
  } else {
    res.status(200).json({ mensaje: "No hay productos" });
  }
});

// 2 GET '/api/productos/:id' -> devuelve un producto según su id.

router.get("/productos/:id", (req, res) => {
  const response = productos.getById(req.params.id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ error: "producto no encontrado" });
  }
});

// 3 POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado

router.post("/productos", (req, res) => {
  res.status(200).json(productos.save(req.body));
});

// 4 PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

router.put("/productos/:id", (req, res) => {
  const response = productos.updateItem(req.body, req.params.id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ error: "producto no encontrado" });
  }
});

// 5 DELETE '/api/productos/:id' -> elimina un producto según su id.

router.delete("/productos/:id", (req, res) => {
  productos.deleteById(req.params.id);
  res.status(200);
});

module.exports = router;
