const Contenedor = require("../Contenedor");
const { Router } = require("express");
const router = Router();

const productos = new Contenedor();

// 1 GET '/api/productos' -> devuelve todos los productos.

router.get("/productos", async (req, res) => {
  res.json(productos);
});

// 2 GET '/api/productos/:id' -> devuelve un producto según su id.

router.get("/productos/:id", async (req, res) => {
  res.json(productos.getById(req.params.id));
});

// 3 POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado

// 4 PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

// 5 DELETE '/api/productos/:id' -> elimina un producto según su id.

module.exports = router;
