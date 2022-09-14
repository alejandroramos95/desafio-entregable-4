module.exports = class Contenedor {
  constructor() {
    this.array = [];
  }

  // 1 GET '/api/productos' -> devuelve todos los productos.

  getAll() {
    return this.array;
  }

  // 2 GET '/api/productos/:id' -> devuelve un producto según su id.

  getById(id) {
    return this.array.find((item) => item.id == id);
  }

  // 3 POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

  save(itemNuevo) {
    console.log("hola", itemNuevo);
    if (this.array.length) {
      const arrayAOrdenar = [...this.array];
      const indice = arrayAOrdenar.sort((a, b) => b.id - a.id)[0].id;
      itemNuevo.id = indice + 1;
    } else {
      itemNuevo.id = 1;
    }
    this.array.push(itemNuevo);
    return itemNuevo;
  }

  // 4 PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

  updateItem(obj, id) {
    for (let i = 0; i < this.array.length; i++) {
      if (id == this.array[i].id) {
        this.array[i].price = obj.price;
        this.array[i].thumbnail = obj.thumbnail;
        this.array[i].title = obj.title;
      }
    }
  }

  // 5 DELETE '/api/productos/:id' -> elimina un producto según su id.

  deleteById(id) {
    this.array = this.array.filter((item) => item.id != id);
  }
};
