// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#email').on('keyup', function() {
    var currentValue = $(this).val();
    var validPattern = $(this).attr('pattern');
    if(currentValue.match(validPattern)) {
      $('#submit').addClass('active');
    }
  });

});
