// Constructor para definir nuevos carros
/*
As prototype object is an object, we
can attach properties and methods
to the prototype object
*/
function Carro(options) {
    this.state = options.state || 'Nuevo';
    this.color = options.color || 'Negro';
    this.doors = options.doors || 4;
}
// Constructor para definir nuevas camionetas
function Camioneta(options) {
    console.log(this, 'qwerr');
    this.state = options.state || 'Usado';
    this.color = options.color || 'Blanco';
    this.wheelSize = options.wheelSize || 'M';
}
// Definición de Esqueleto para VehiculosFactory
function VehiculosFactory() {}
// Default vehicleClass es Carro
VehiculosFactory.prototype.vehicleClass = Carro;
// Factory method para crear nuevas instancias de Vehiculos
VehiculosFactory.prototype.createVehicle = function(options) {
    switch(options.vehicleType) {
        case ('carro') :
            this.vehicleClass = Carro;
        break;
        case ('camioneta') :
            this.vehicleClass = Camioneta;
            break;
        }
        return new this.vehicleClass(options);
};
    // Crea instancia de nuestra Fábrica de Carros 
    var carFactory = new VehiculosFactory();
    console.log(carFactory);
    console.log(Camioneta.prototype);
    var carro = carFactory.createVehicle({  vehicleType: 'camioneta',  color: 'Verde',  doors: 2, state: '2020', wheelSize: '30 pl'});
    
    // Output: true
console.log(carro instanceof Carro);
// Output: { color: “Verde”, doors: 2, state: “Nuevo” }
console.log(carro)