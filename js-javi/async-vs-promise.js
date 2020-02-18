const random = () => Promise.resolve(Math.random());

const sumRandomAsyncnumbers = () => {
    let sum = 0;
    return new Promise((resolve, reject) =>{
    random().then(num => {
        sum += num;
        return random();
    }).then((num) => {
        sum += num;
        return random();
    }).then(num => {
        sum += num; 
        resolve(sum);
    });
    });  
};
const withAwait = async () => {
    let total = 0;
    total += await random();
    total += await random();
    total += await random();
    return total;
}
withAwait().then(val => console.log(val, 'as'));
sumRandomAsyncnumbers().then(val => console.log(val));
