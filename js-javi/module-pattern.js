var carrito = (function() {
    // Privadas
    var items = [];
    function getItems() {
        return items;
    }
    // Público
    return {
        addItem: function(values) {
            items.push(values);
        },
        allItems: getItems,
        getItemsCount: function(values) {
            return items.length;
        },
        getTotal: function(values) {
            var counter = this.getItemsCount();
            var total = 0;
            while (counter > 0) {
                total += items[counter-1].price;
                counter--;
            }
            return total;
        }
    };
})();
carrito.addItem({  item: 'Pan',  price: 11.00});
carrito.addItem({  item: 'Jamón',  price: 39.00});
carrito.addItem({  item: 'Cermeza',  price: 30.00});
// Output: 2
console.log(carrito.getItemsCount(), 'count');
// Output: 50
console.log(carrito.allItems(), 'items');
console.log(carrito.getTotal(), 'total');
// Output: undefined
// esto es porque items no está expuesto como parte de la API públicaconsole.log(carrito.items);