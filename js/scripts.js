$('.eng').click(function() {
  $('.rus-v').hide();
  $('.eng-v').show();
  $('.eng-flex').css('display', 'flex')
  $('.rus').removeClass('active-lang');
  $('.eng').addClass('active-lang');
});

$('.rus').click(function() {
  $('.eng-v').hide();
  $('.rus-v').show();
  $('.eng').removeClass('active-lang');
  $('.rus').addClass('active-lang');
});