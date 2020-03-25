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
// We extend the object with an extention
function extend(obj, extension) {
    for (var key in extension) {
        obj[key] = extension[key];
    }
}
// References to the DOM elements
var controlCheckbox = document.getElementById('mainCheckbox');
var addBtn = document.getElementById('addNewObserver');
var container = document.getElementById('observersContainer');

// Concret subject, we extend the checkbox's control with the Subject class
extend(controlCheckbox, new Subject());
// When a click is fired the checkbox triggers a notification to the observers
controlCheckbox.onclick = function() {
    controlCheckbox.notify(controlCheckbox.checked);
};
addBtn.onclick = addNewObserver;
// Concrete observer
function addNewObserver() {
    // Create a new checkbox to be added later 
    var check = document.createElement('input');
    check.type = 'checkbox';
    // Extends the checkbox with the Observer class
    extend(check, new Observer());
    // Overwrite the behavior update
    check.update = function(value) {
        this.checked = value;
    };
    /* Add the new observer to the observers list to our
    principal Subject*/
    controlCheckbox.addObserver(check);
    // Add the item in the container
    container.appendChild(check);
}