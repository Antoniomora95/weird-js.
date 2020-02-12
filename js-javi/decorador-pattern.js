// Constructor para Vehiculos
// more info here: https://www.codementor.io/@faizanhaider/javascript-decorator-pattern-9wr03qb20
function Vehiculo(vehicleType) {
    this.vehicleType = vehicleType || 'carro';
    this.model = 'default';
    this.license = '00000-00';
}
// Prueba básica para la instancia de un vehiculo
var testInstance = new Vehiculo('carr');
// Output: { vehicleType: “carro”, model: “default”, license: “00000-00” }
console.log(testInstance);
var camioneta = new Vehiculo('camioneta');
// Nueva funcionalidad, decoramos Vehicle con:
camioneta.setModel = function(modelName) { this.model = modelName; 
};
camioneta.setColor = function(colorName) {this.color = colorName;
};
// Prueba funcionamiento de setters y asignación de valores
camioneta.setModel('CAT');
camioneta.setColor('Roja');
// Output: { vehicle: “camioneta”, color: “Roja”, model: “CAT” }
console.log(camioneta);