$(document).ready(function() {
  // alert('yes')

  $('.main_image').cycle({
    fx:      'scrollRight',
    next:   '.arrow',
    timeout:  0,
    speed: 1500,
    easing:  'easeInOutBack',
  });

  $('.course').hover(
    function(){$(this).find('.overlay').slideDown()},
    function(){$(this).find('.overlay').slideUp()}
  );

  $('.course').hover(
    function(){$(this).find('.course_overlay').slideDown()},
    function(){$(this).find('.course_overlay').slideUp()}
  );
});

