// create save enviroment using IIFE
(function (global, $) {
  let Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.prototype = {};

  Greetr.init = function (firstName, lastName, language) {
    let self = this;
    (self.firstName = firstName || ''),
      (self.lastName = lastName || ''),
      (self.language = language || 'en');
  };

  Greetr.prototype.greet = function () {
    if (self.language === 'en') {
      return 'Hello ' + self.firstName + ' ' + self.lastName;
    } else if (self.language === 'es') {
      return 'Hola ' + self.firstName + ' ' + self.lastName;
    } else {
      return 'Language not supported, try "en" or "es"';
    }
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
