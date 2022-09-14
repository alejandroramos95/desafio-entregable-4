const express = require("express");
const app = express();
const routes = require("./routes/productos");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Formulario
app.get("/:file", (req, res) => {
  res.sendFile(__dirname + `/public/${req.params.file}`);
});

// Ruta /productos
app.use("/api", routes)

// Servidor levantado
app.listen(8080, () => console.log("Server levantado en el puerto 8080."));
