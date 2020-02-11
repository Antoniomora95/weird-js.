function checkAuth() {
    return new Promise((resolve, reject) => {
        reject('uppps');
    });
    /*return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({ isAuth: true });
        }, 2000);
    });
    */
};
function getUser(authInfo) {
    return new Promise(function(resolve, reject) {
        if (!authInfo.isAuth) {
            reject(null);
        }
        setTimeout(function() {
            resolve({name: 'Javier z' });
        }, 2000);
    });
};

async function fetchUser() {
    try {
        debugger
        const auth = await checkAuth();
        const user = await getUser(auth);
        return user;
    } catch(error) {
        return error
    }
};
fetchUser().then((user) => {
    console.log(user.name);
}).catch(err => console.log(err));
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Oka'), 2000);
    });
    let result = await promise;
    console.log(result);
};
f();
//‘Ok’ después de 2s
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}
new Waiter().wait().then(alert);


console.log(Object.create(Object.prototype));