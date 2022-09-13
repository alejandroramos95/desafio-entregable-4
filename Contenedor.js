export default class Contenedor {
  constructor() {
    this.array = [];
  }

  // 1 GET '/api/productos' -> devuelve todos los productos.

  // 2 GET '/api/productos/:id' -> devuelve un producto según su id.

  getById(id) {
    return this.array.find((item) => item.id == id);
  }

  // 3 POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

  save(itemNuevo) {
    const indice = this.array
      ? this.array.sort((a, b) => b.id - a.id)[0].id
      : 0;
    itemNuevo.id = indice + 1;
    this.array.push(itemNuevo);
    return itemNuevo;
  }

  // 4 PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

  // 5 DELETE '/api/productos/:id' -> elimina un producto según su id.

  deleteById(id) {
    this.array = this.array.filter((item) => item.id != id);
  }

  async deleteAll() {
    await this.write([]);
  }

  async getRandom() {
    const items = await this.getAll();
    let indice = Math.floor(Math.random() * items.length);
    return items[indice];
  }
}
