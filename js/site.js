// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#name').on('focus', function() {
    $('#input-name label').addClass('active');
  });
  $('#name').on('blur', function() {
    if($('#name').val().length == 0){
      $('#input-name label').removeClass('active');
    }
  });

  $('#email').on('focus', function() {
    $('#input-email label').addClass('active');
  });
  $('#email').on('blur', function() {
    if($('#email').val().length == 0){
      $('#input-email label').removeClass('active');
    }
  });

  $('#email').on('keyup', function() {
    var currentValue = $(this).val();
    var validPattern = $(this).attr('pattern');
    if(currentValue.match(validPattern)) {
      $('#submit').addClass('active');
    }
    else {
      $('#submit').removeClass('active');
    }
  });

});
