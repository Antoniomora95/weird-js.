function a (){
    console.log(this);
}
var b = function() {
    console.log(this);
};
//a();
//b();
/*var c = {
    t: this,
    name: 'the c object',
    log: function() {
        var self = this;
        console.log(self);
        self.name = 'updated c object';
        console.log(this);
        var setName = function(newname) {
            self.name = newname;
        }
        setName('updated again, the c object');
        console.log(self);
    }
};
c.log();
console.log(c.t);*/
var one = {
    prop: this,
    f: function () {
        debugger
      return this;
    }
};
console.log(one.f());

//a method inside of a method inside of an object