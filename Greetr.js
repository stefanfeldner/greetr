// create save enviroment using IIFE
(function (global, $) {

    let Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    Greetr.init = function(firstName, lastName, language) {
        let self = this;
        self.firstName = firstName,
        self.lastName = lastName,
        self.language = language,
        self.greet = function() {
            if (language === 'en') {
                return 'Hello ' + self.firstName + ' ' + self.lastName;
            } else if (language === 'es') {
                return 'Hola ' + self.firstName + ' ' + self.lastName;
            } else {
                return 'Language not supported, try "en" or "es"';
            }
        }
    }

    G$ = Greetr;
})(window, jQuery);
