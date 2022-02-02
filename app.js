// let's use our object on the click of the login button
$('#login').on('click', () => {
  let login = G$('Stefan', 'Feldner');
  // hide the login button
  $('#logindiv').hide();
  // set the language with the form data and render to html
  login.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
