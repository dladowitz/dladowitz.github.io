$(document).ready(function() {
  // alert('yes')

  //cycles though images on class page and company page
  $('.main_image').cycle({
    fx:      'scrollRight',
    next:   '.arrow',
    timeout:  0,
    speed: 1500,
    easing:  'easeInOutBack',
  });

  //slides up and down screen on main page
  $('.course').hover(
    function(){$(this).find('.overlay').slideDown()},
    function(){$(this).find('.overlay').slideUp()}
  );

  //slides up and down screen on company page
  $('.course').hover(
    function(){$(this).find('.course_overlay').slideDown()},
    function(){$(this).find('.course_overlay').slideUp()}
  );





    // var mouse_is_inside = false;

    // $('.account div').hover(
    //   function(){ console.log(mouse_is_inside=true) },
    //   function(){ console.log(mouse_is_inside=false) }
    // );

    // $("body").mouseup(function(){
    //     if(mouse_is_inside) {
    //       $('.show_company_info').addClass('highlight')
    //     } else {
    //       $('.show_company_info').removeClass('highlight')
    //     }
    //

    var element
    $('.account div').mouseup(function(){
      console.log(element = this)

      $('.account div').each(function(){
        if(this == element){
          $(this).addClass('highlight')
        }else{
          $(this).removeClass('highlight')
        }
      })
    })



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

  $('.main .company_creation .admin_class .first_class_td').hover(
    function(){$(this).css({cursor: 'pointer', color: 'black'})},
    function(){$(this).css('color', 'rgba(0, 0, 0, .6)')}
  );

  $('.main .company_creation .admin_class .first_class_td').hover(
    function(){$(this).parent().find('.edit_icon').show()},
    function(){$(this).parent().find('.edit_icon').hide()}
  );
  // .edit_icon

  $('.main .company_creation .admin_class .first_class_td').click(function(){
    // alert($(this).find('input'))
    // $(this).find('td').css('color', 'red')
    // $(this).css('background-color', 'green')
    $(this).hide();
    $(this).parent().find('.last_class_td').show();
  });

 $('.main .company_creation .admin_class .class_save').click(function(){
    var updatedText = $(this).parent().parent().find('input:text').val();

    $(this).parent().parent().find('.last_class_td').hide();
    if(updatedText.length > 0){
      $(this).parent().parent().find('.first_class_td').html(updatedText);
    };
    $(this).parent().parent().find('.first_class_td').show();
  });

 $('.main .company_creation .admin_class .class_save_instructor').click(function(){
    var updatedText = $(this).parent().parent().find('select').val();

    $(this).parent().parent().find('.last_class_td').hide();
    $(this).parent().parent().find('.first_class_td').html(updatedText);

    $(this).parent().parent().find('.first_class_td').show();
  });

 $('.main .company_creation .admin_class .class_save_description').click(function(){
    var updatedText = $(this).parent().parent().find('textarea').val();

    $(this).parent().parent().find('.last_class_td').hide();
    if(updatedText.length > 0){
      $(this).parent().parent().find('.first_class_td').html(updatedText);
    };

    $(this).parent().parent().find('.first_class_td').show();
  });


  $('.shown_permission').click(function(){
    // var updatedText = $(this).parent().parent().find('textarea').val();

    // $(this).parent().parent().find('.last_class_td').hide();
    // if(updatedText.length > 0){
    //   $(this).parent().parent().find('.first_class_td').html(updatedText);
    // };

    $(this).parent().find('.edit_permission').show();
    $(this).hide();
    // $(this).parent().parent().find('.first_class_td').show();
  });

  //picks date when editing a class
  $(function() {
    $( ".datepicker" ).datepicker();
  });


  //add background highlight to show where user is in nav bar
  $(function(){
    var str=location.href;
    // console.log(str)

    $('.nav a').each(function() {
      // console.log(this.href)
      if(str === this.href) {
        $(this).addClass('active')
        // $("li.active").removeClass("active");
        // $(this).parent().addClass("active");
      }
    });
  })




});

