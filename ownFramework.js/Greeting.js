(function(global, $){
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    Greetr.init = function(firstname, lastname, language) {
        var self = this;
        self.firstname = firstname || 'Name default';
        self.lastname = lastname || 'Lastname default';
        self.language = language || 'en';
    }
    var supportedLanguages = ['en', 'es'];
    var greetings = {
        en: 'Hello',
        es: 'Hola' 
    };
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    Greetr.prototype = {
        fullName: function (){
            return this.firstname +' '+this.lastname;
        },
        validate: function (){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw 'Invalid language'
            } 
        },
        greeting: function(){
            return greetings[this.language] +' '+ this.firstname;
        },
        formalGreeting: function() {
            return formalGreetings[this.language]+': '+ this.firstname;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language]+' '+ this.fullName());
            }
            return this;
        },
        setLanguage: function (lang){
            this.language = lang;
            this.validate();
            return this;
        }
    };
    /*remember that each instanceGreeting.__proto__ will
    point to Greetr.init.prototype */
    Greetr.init.prototype = Greetr.prototype;
    console.log(Greetr.prototype);
    global.Greetr = global.G$ = Greetr;
}(window, element = 'fd'));