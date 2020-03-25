function makeGreeting(language){
    return function(firstname, lastname) {
        if (language === 'en'){
            console.log('Hello: ', firstname,lastname);
        }
        if (language === 'es'){
            console.log('Hola: ', firstname,lastname);
        }
    }
}

var greetReturnedEn = makeGreeting('en');
var greetReturnedEs = makeGreeting('es');

greetReturnedEn('Antonio', 'Mora');
greetReturnedEs('Jose Luis', 'Perez');