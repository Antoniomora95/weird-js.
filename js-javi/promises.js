function getUser() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({name: 'Javier' });
        }, 2000);
    }); 
};
getUser().then(function(user) { 
    console.log(user.name, 'sdsd', new Date().toString());
}).catch((err) => console.log(err));


//avoid callback hell

function checkAuth() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ isAuth: false });
        }, 2000);
    });
};
function getUser2(authInfo) {
    return new Promise(function(resolve, reject) {
        if (!authInfo.isAuth) {
            setTimeout(function(){
                reject(new Error('Error in auth'+ new Date().toString()));
            },1000);
        }
        setTimeout(function() {
            resolve({name: 'Javier z' });
        }, 2000);
    });
};
checkAuth().then(function(authStatus) {
    return getUser2(authStatus);
}).then(function(user) {
    console.log(user.name);
}).catch(function(error) {
    console.log(error); 
});

// resolve a promise
var button = document.getElementById('button');
var handleClick = function() {
    return new Promise(function(resolve) {
        button.addEventListener('click', function() {
            resolve(event);
        });
    });
};
handleClick().then(function(event) {
    console.log(event.target);
});
