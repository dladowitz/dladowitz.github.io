// Here's some basic instructions. Try to set it up
// so that you can click 'next image' and it cycles through
// all the images one at a time!

// Hide all the images
// Show the first one
// Create a variable to store the current slide number
// Set up a click event for div.next
// On each click, hide the current slide, and show the next one
// Use a condition to check if you've gone past the end and reset the current slide counter

// You may want to use jQuery's .eq() function to get a specific
// element in the jQuery result. Read about it at api.jquery.com



var currentImage = 1

var setCurrentImage = function(){
  currentImage = currentImage + 1
  if(currentImage === 3){
    currentImage = currentImage - 3;
  }
  return currentImage
}

var nextSlide = function(){
  console.log('nextSlide firing, currentImage: ' + currentImage)
  $('#slideshow2 img').hide()
  $('#slideshow2 img').eq(currentImage).show()

  currentImage = setCurrentImage()

};



$(document).ready(function() {

  $('#slideshow1').cycle({
    fx:      'scrollRight',
    next:   '#next_1',
    timeout:  0,
    easing:  'easeInOutBack'
  });

  $('#slideshow2 img:first-child').show()
  $('#next_2').click(nextSlide)

});

