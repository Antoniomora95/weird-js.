// Sin Arrow Function
class Ingredients {
    constructor(ingredients) {
        this.ingredients = Array.isArray(ingredients) ? ingredients : [];
    }
    list() {
        this.ingredients.forEach(function(ingredient, i, ingredients) {
            console.log(ingredient, i + '/' + ingredients.length);
        });
    }
}
var ingredients = new Ingredients(['cheese', 'lettuce', 'jam']);
ingredients.listar();


// With Arrow Function
class IngredientsArrow {
    constructor(ingredients) {
        this.ingredients = Array.isArray(ingredients) ? ingredients : [];
    }
    list() {
        this.ingredients.forEach((ingredient, i) => {
            // ‘this’ will work
            console.log(ingredient, i+1 + '/' + this.ingredients.length);
        });
    }
}
var ingredientsArrow = new IngredientsArrow(['bread', 'milk', 'fruit']);
ingredients.list();