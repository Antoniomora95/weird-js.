function first(x){  
    debugger;
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



/*
Un closure es un tipo especial de objeto que 
combina dos cosas: una función, y el entorno 
en que se creó esa función. El entorno está 
formado por las variables locales que estaban 
dentro del alcance en el momento que se creó 
el closure. En este caso, miFunc es un closure 
que incorpora tanto la función muestraNombre como 
el string "Mozilla" que existían cuando se creó 
el closure.
 */
function returnFunction() {
    var name = "Mozilla";
    function showString() {
      alert(name);
    }
    return showString;
  }
  
  var returned = returnFunction();
  returned(); 

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.fullName = function() {
    return this.name + 'is, ' + this.age + 'years old';
  };
  var person = new Person('Javier', 30);
  // Get Properties
  console.log(person.fullName());