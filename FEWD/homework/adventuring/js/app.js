$(document).ready(function() {
  // alert('yes')

  $('.main_image').cycle({
    fx:      'scrollRight',
    next:   '.arrow',
    timeout:  0,
    speed: 1500,
    easing:  'easeInOutBack',
  });

  // $('.course_photo').cycle({
  //   fx:      'scrollRight',
  //   // next:   '.course_photo',
  //   timeout:  500,
  //   speed: 1500,
  //   easing:  'easeInOutBack',
  // });
});

