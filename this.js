function a (){
    console.log(this);
}
var b = function() {
    console.log(this);
};
a();
b();
var c = {
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