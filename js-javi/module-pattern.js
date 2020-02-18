// here more info: https://coryrylan.com/blog/javascript-module-pattern-basics
var carrito = (function() {
    // Privadas
    var _items = [];
    function getItems() {
        return _items;
    }
    // Público
    return {
        addItem: function(values) {
            _items.push(values);
        },
        allItems: getItems,
        getItemsCount: function(values) {
            return _items.length;
        },
        getTotal: function(values) {
            var counter = this.getItemsCount();
            var total = 0;
            while (counter > 0) {
                total += _items[counter-1].price;
                counter--;
            }
            return total;
        }
    };
})();
carrito.addItem({  item: 'Pan',  price: 11.00});
carrito.addItem({  item: 'Jamón',  price: 39.00});
carrito.addItem({  item: 'Cerme',  price: 30.00});
console.log(carrito.getItemsCount(), 'count');
console.log(carrito.allItems(), 'items');
console.log(carrito.getTotal(), 'total');
// esto es porque items no está expuesto como parte de la API pública
console.log(carrito.items);
// Output: undefined
// esto es porque items no está expuesto como parte de la API públicaconsole.log(carrito.items);




