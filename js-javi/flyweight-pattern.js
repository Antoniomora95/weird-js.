// flyweight class
// example 1: https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
// examples 2: https://www.dofactory.com/javascript/flyweight-design-pattern
function Flyweight (make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};
var FlyWeightFactory = (function () {
    var flyweights = {};
    var counter = 0;
    return {
        get: function (make, model, processor) {
            counter++;
            if(counter == 4){
                flyweights['HP' + 'Envy'].processor = 'cambio'
            }
            // check if the object has the property  [make + model] 
            //if that is not true add a property and the value is a new Flyweight
            if (!flyweights[make + model]) {
                flyweights[make + model] =  new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },
        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();
function ComputerCollection () {
    var computers = {};
    var count = 0;
    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] = new Computer(make, model, processor, memory, tag);
            count++;
        },
        get: function (tag) {
            console.log(computers, 'all of them');
            return computers[tag];
        },
        getCount: function () {
            return count;
        }
    };
}
var Computer = function (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ..
}
// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log, 'log'); log = ""; }
    }
})();
function run() {
    var computers = new ComputerCollection();
    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");
    log.add("Computers: " + computers.getCount());
    log.add("Computer : " + computers.get('sds'));
    log.add("Flyweights: " + FlyWeightFactory.getCount());
    log.show();
};
run();