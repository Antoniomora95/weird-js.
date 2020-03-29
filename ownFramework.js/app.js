// generate a list of people with formal and informal greets

var listUsers = [
    {
        name: 'Antonio',
        lastaname: 'Mora',
        language: 'es',
        formal: true
    },
    {
        name: 'Luis',
        lastaname: 'Perez',
        language: 'en',
        formal: false
    }
];
for (let index = 0; index < listUsers.length; index++) {
    let userIndex = listUsers[index];
    let user = {};
    user.obj = G$(userIndex.name, userIndex.lastaname, userIndex.language);
    user.fullname = user.obj.fullName();
    user.greeting = userIndex.formal ? user.obj.formalGreeting(): user.obj.greeting();
    let div = `
    <div>
        <h2>${user.greeting}</h2>
        <p>${user.fullname}</p>
    </div>`;
    //$('#main').append(div);
}
$( "#formLog" ).submit(function( event ) {
    event.preventDefault();
    var userArray = $("#formLog").serializeArray();
    userArray = userArray.map((element, index) => {
        if(index === 2) {
            element.value = element.value === 'true' ? true : false;
        }
        return element.value;
    });
    let userObj = G$(userArray[0], userArray[1], userArray[3]);
    let fullname = userObj.fullName();
    let greeting = userArray[2] ? userObj.formalGreeting(): userObj.greeting();
    let div2 = `
    <div display='flex'>
        <h2>${greeting}</h2>
        <p>${fullname}</p>
    </div>`;
    $('#loguedIn').html('');
    $('#loguedIn').append(div2).css('display', 'block');
});
