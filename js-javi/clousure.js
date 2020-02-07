function first(x){  
    // El parámetro x es una variable interna  
    // La función second utiliza x pero no como parámetro  
    // Tiene acceso a esta variable  
    // Por lo que se puede decir que es un clousure  
    function second(y){    
        return x + y;  
    }  
    return second;
};
// Aquí lo que sucede es que suma1 hace una referencia a second()
// Asignando el parámetro x
var suma1 = first(1);
suma1(2);
// 3  1 + 3 | Recibe ‘y’ dentro de second() y 
//realiza la operación