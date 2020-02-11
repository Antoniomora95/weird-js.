function checkAuth(cb) {
    setTimeout(function() {
        cb({ isAuth: true });  
    }, 2000);
};
function getUser(authInfo, cb) {
    if (!authInfo.isAuth) {    
        cb(null);
        return;   
    }
    setTimeout(function() {
        cb({ name: 'Javier' });
    }, 2000);
};
checkAuth(function(authInfo) {
    getUser(authInfo, function(user) {
        console.log(user.name);
        // Funcionará después de 4s por los setTimeout()
    });
});
