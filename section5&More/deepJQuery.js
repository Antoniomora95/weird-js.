/*Method chaining: calling one method after another, and
each method affects the parent object*/
debugger
var li = $("ul.people li").addClass('newClass').removeClass('people');
console.log(li);
