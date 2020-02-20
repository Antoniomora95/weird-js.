// Constructor to define new cars
/*
As prototype object is an object, we
can attach properties and methods
to the prototype object
*/
function Car(options) {
    this.state = options.state || 'New';
    this.color = options.color || 'Black';
    this.doors = options.doors || 4;
}
// Constructor para definir nuevas camionetas
function Truck(options) {
    this.state = options.state || 'used';
    this.color = options.color || 'white';
    this.wheelSize = options.wheelSize || 'Medium';
    console.log(this);
}
// Definition of the skeleton for VehiclesFactory
function VehiclesFactory() {}
// Default vehicleClass is car
VehiclesFactory.prototype.vehicleClass = Car;
// Factory method to create new vehicles instances
VehiclesFactory.prototype.createVehicle = function(options) {
    switch(options.vehicleType) {
        case ('car') :
            this.vehicleClass = Car;
        break;
        case ('truck') :
            this.vehicleClass = Truck;
            break;
    }
    return new this.vehicleClass(options);
};
// Create an instance of our cars factory
var carFactory = new VehiclesFactory();
var carro = carFactory.createVehicle(
    {
        vehicleType: 'truck',
        color: 'Green',
        doors: 2,
        state: '2020',
        wheelSize: '30 pl'
    }
);
// Output: { color: “truck”, doors: 2, state: “2020”
console.log(carro)
