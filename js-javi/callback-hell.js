function checkAuth(cb) {
    setTimeout(function() {
        cb({ isAuth: true });  
    }, 1000);
}
function getUser(authInfo, cb) {
    if (!authInfo.isAuth) {    
        cb(null);
        return;   
    }
    setTimeout(function() {
        cb({ name: 'Javier', id:10121});
    }, 2000);
}
function searchTasks(user, callback) {
    if(user.id && user.id === 10111) {
        callback([
            {name:'clean the house'},
            {name:'walk the dog'},
            {name:'mop the floor'},
            {name:'visit your parents'}
        ], null);
    } else {
        callback([], {status:500, description:'something wrong happend'});
    }
}
checkAuth(function(authInfo) {
    getUser(authInfo, function(user) {
        searchTasks(user, function(response, err){
            if(response){
                console.table(user.name);
            }
            if (err){
                console.log(err.status, err.description);
            }
        });
        // Funcionará después de 4s por los setTimeout()
    });
});
