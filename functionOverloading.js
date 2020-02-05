function greet(firstname, lastname, languaje){
    languaje = languaje || 'eng';
    if(languaje === 'en') console.log('Hello '+ firstname+ ' '+lastname);
    if(languaje === 'es') console.log('Hola '+ firstname+ ' '+lastname);
}
/*greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');*/
// function overloading ---> create multiple functions of the
// same name with different imlementations
function greetEnglish(firstname, lastname){
    greet(firstname, lastname, 'en');
}
function greetSpanish(firstname, lastname){
    greet(firstname, lastname, 'es');
}
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

