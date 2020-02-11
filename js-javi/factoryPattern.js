// Constructor para definir nuevos carros
function Carro(options) {
    this.state = options.state || 'Nuevo';
    this.color = options.color || 'Negro';
    this.doors = options.doors || 4;
}
// Constructor para definir nuevas camionetas
function Camioneta() {
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
    switch(opctions.vechicleType) {
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
    var carro = carFactory.createVehicle(
    {  vehicleType: 'carro',  color: 'Verde',  doors: 2}
    );
    
    // Output: true
console.log(carro instanceof Carro);
// Output: { color: “Verde”, doors: 2, state: “Nuevo” }
console.log(carro)