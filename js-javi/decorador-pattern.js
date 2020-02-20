// Constructor para Vehiculos
// more info here: https://www.codementor.io/@faizanhaider/javascript-decorator-pattern-9wr03qb20
function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-00';
}
// basic test for the car instance
var testInstance = new Vehicle('car');
// Output: { vehicleType: “car”, model: “default”, license: “00000-00” }
console.log(testInstance);
var truck = new Vehicle('truck ford');
// new functionality, we decorate Vehicle with:
truck.setModel = function(modelName) { this.model = modelName; 
};
truck.setColor = function(colorName) {
    this.color = colorName;
};
// test to check the set methods
truck.setModel('f150 raptor');
truck.setColor('Red');
// Output: { vehicle: “c”, color: “Roja”, model: “CAT” }
console.log(truck);