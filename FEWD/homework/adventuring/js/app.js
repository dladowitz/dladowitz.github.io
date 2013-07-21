$(document).ready(function() {
  // alert('yes')

  $('.main_image').cycle({
    fx:      'scrollRight',
    next:   '.arrow',
    timeout:  0,
    speed: 1500,
    easing:  'easeInOutBack',
    pause: 1
  });

  // $('.main_image').cycle({
  //   fx:      'scrollLeft',
  //   next:   '.main_image',
  //   timeout:  0,
  //   speed: 1500,
  //   easing:  'easeInOutBack',
  //   pause: 1
  // });
});

