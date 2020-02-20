function getUser(cb) {
    debugger
    setTimeout(function() {
        // cb parameter is a function
        cb({ name: 'Antonio'});
    }, 2000);
};
var person = getUser();
console.log(persona.name); // It won't work
getUser(function(user) {
    console.log(user.name);
    // It will work after 2 seconds becaause of the setTimeout()
});
