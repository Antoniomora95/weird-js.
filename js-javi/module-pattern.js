// here more info: https://coryrylan.com/blog/javascript-module-pattern-basics
var cart = (function() {
    // Private
    var _items = [];
    function getItems() {
        return _items;
    }
    // Públic
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
cart.addItem({  item: 'Bread',  price: 11.00});
cart.addItem({  item: 'Jam',  price: 39.00});
cart.addItem({  item: 'Tomatoes',  price: 30.00});
console.log(cart.getItemsCount(), 'count');
console.log(cart.allItems(), 'items');
console.log(cart.getTotal(), 'total');
console.log(cart.items);
// Output: undefined
// this is because items is not exposed as part of the public API




