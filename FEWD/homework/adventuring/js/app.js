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

  $('.show_company_info').click(function(){
    $('.show_company').css('display', 'block');
    $('.edit_company').css('display', 'none');
    $('.show_classes').css('display', 'none');
    $('.user_permissions').css('display', 'none');
  });

  $('.edit_company_info').click(function(){
    $('.edit_company').css('display', 'block');
    $('.show_company').css('display', 'none');
    $('.show_classes').css('display', 'none');
    $('.user_permissions').css('display', 'none');
  });

  $('.show_class_info').click(function(){
    $('.show_company').css('display', 'none');
    $('.edit_company').css('display', 'none');
    $('.show_classes').css('display', 'block');
    $('.user_permissions').css('display', 'none');
  });

  $('.show_user_permissions').click(function(){
    $('.show_company').css('display', 'none');
    $('.edit_company').css('display', 'none');
    $('.show_classes').css('display', 'none');
    $('.user_permissions').css('display', 'block');
  });

  $(function() {
    var availableSports = ["Rock Climbing", "Sailing", "Scuba Diving", "Canyoneering", "Mountianeering", "Skydiving", "Paragliging", "Mountain Biking", "White Water Rafting", "Hang Gliding",
      "Base Jumping", "Kayaking", "Motorcyle Racing", "Auto Racing", "Cave Diving", "Bull Riding", "Motocross"];

    $( ".search_box" ).autocomplete({
      source: availableSports
    });
  });


});

