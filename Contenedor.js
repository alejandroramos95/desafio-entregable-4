module.exports = class Contenedor {
  constructor() {
    this.array = [
      {
        "title": "Escuadra",
        "price": 123.45,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        "id": 1
      },
      {
        "title": "Calculadora",
        "price": 234.56,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        "id": 2
      },
      {
        "title": "Globo Terráqueo",
        "price": 345.67,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        "id": 3
      }
    ]
  }

  // 1 GET '/api/productos' -> devuelve todos los productos.

  getAll(){
    return this.array;
  }

  // 2 GET '/api/productos/:id' -> devuelve un producto según su id.

  getById(id) {
    return this.array.find((item) => item.id == id);
  }

  // 3 POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

  save(itemNuevo) {
    const indice = this.array // this.array.length
      ? this.array.sort((a, b) => b.id - a.id)[0].id
      : 0;
    itemNuevo.id = indice + 1;
    this.array.push(itemNuevo);
    return itemNuevo;
  }

  // 4 PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

  updateItem(obj, id){
    this.array = this.array.filter((item) => item.id != id);
    this.array = this.array.push(obj);        
  }

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