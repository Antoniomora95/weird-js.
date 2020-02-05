let array =  [
    [3,  4, 7, 5, 1],  
    [5, 10, 4, 6, 4], 
    [8, 15, 0, 10, 9],
    [3,  4, 7, 20, 8],
    [3,  4, 7, 20, 8]];     //41 - 14

let flat = array.flat();
let initialLength = Math.sqrt(flat.length);
diagonals =[0, 0];
positions = [0, initialLength-1];
iterations = [0,0];

for (let i = 0; i < flat.length; i++) {
    debugger;
    if (i == positions[0] && iterations[0] < initialLength) {
        diagonals[0] +=flat[i];
        positions[0]+= initialLength+1;
        iterations[0] +=1;
    }
    if (i == positions[1] && iterations[1] < initialLength) {
        diagonals[1] +=flat[i];
        positions[1]+= initialLength-1;
        iterations[1] +=1;
    }
}
let total = diagonals[0] - diagonals[1] < 0 ? (diagonals[0] - diagonals[1]) * (-1) : diagonals[0] - diagonals[1];
console.log(total);
// console.log(total);
  // si tienes un if y un else if seguido toma la primer comparacion si se cumplee ignora la segunda no mamessssss