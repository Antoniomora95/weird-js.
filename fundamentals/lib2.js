
//var libraryName = 'Lib 2';
//here js check if the var is already declared, that is true 
//so the conditon applied is or || and after the equal
//when you see sometinhg like that is the framework or library trying 
// to validate if something exists with that name and do not bother it
// is checking the global object to avoud override something
window.libraryName = window.libraryName || 'Lib 2';