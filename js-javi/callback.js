function getUser(cb) {
    setTimeout(function() {
        cb({ name: 'Antonio'});
    }, 2000);
};
getUser(function(user) {
    console.log(user.name);
    // Funcionará después de 2s por el setTimeout()
});