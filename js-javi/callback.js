function getUser(cb) {
    debugger
    setTimeout(function() {
        cb({ name: 'Antonio'});
    }, 2000);
};
getUser(function (user) {console.log(user.name);});