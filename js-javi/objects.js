var persona = new Object();
// Set Properties
Object.defineProperties(persona, 
    {'name': {
        value: 'Javier',
        writable: true
    }
});
console.log(persona);