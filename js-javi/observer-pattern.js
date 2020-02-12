function ObserverList() {
    this.observerList = [];
}
ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
};
ObserverList.prototype.count = function() {
    return this.observerList.length;
};
ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};
ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
};
ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
};

function Subject() {
    this.observers = new ObserverList();
};
Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};
Subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};
Subject.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for (var i=0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
};// Observer
function Observer() {
    this.update = function() {
        //...
    };
}
// Extendemos el objeto con una extensión
function extend(obj, extension) {
    for (var key in extension) {
        obj[key] = extension[key];
    }
}

// Referencias a los elementos del DOM
var controlCheckbox = document.getElementById('mainCheckbox');
var addBtn = document.getElementById('addNewObserver');
var container = document.getElementById('observersContainer');


// Subject concreto// Extendemos el control del checkbox con la clase Subject
extend(controlCheckbox, new Subject());
// Al hacer clic en el checkbox disparará una notificación a los Observers
controlCheckbox.onclick = function() {
    controlCheckbox.notify(controlCheckbox.checked);
};
addBtn.onclick = addNewObserver;
// Observer Concreto
function addNewObserver() {
    // Crea un nuevo checkbox para añadir  
    var check = document.createElement('input');
    check.type = 'checkbox';
    // Extiende el checkbox con la clase Observer
    extend(check, new Observer());
    console.log(new Observer(), new Subject());
    // Sobrescribe el comportamiento de uptade
    check.update = function(value) {
        this.checked = value;
    };

    /** Añade el nuevo observer a la lista de observers  para nuestro Subject principal. **/
    controlCheckbox.addObserver(check);

    // Añade el item al contenedor
    container.appendChild(check);
}