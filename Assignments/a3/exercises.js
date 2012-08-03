$(document).ready(function() {

// 1. Click
$("#clickMe").click(function(){alert('Button was clicked');})

// 2. Hide/Show
$("#hide").click(function(){$("#hidebox").hide();})
$("#show").click(function(){$("#hidebox").show();})

// 3. Slide
$('#clickslide').click(slideRight);
function slideRight() {$('#slider').animate({'margin-left': '40%'}, 1000, slideLeft);}
function slideLeft() {$('#slider').animate({'margin-left': '0'}, 1000);}

// 4. Fade In/Out
$('#fader').click(function(){$(this).fadeOut('slow', showBringBackButton);});
function showBringBackButton() {$('#bringBack').show();}
$('#bringBack').click(function(){$(this).fadeOut('slow');$('#fader').fadeIn('slow');});

// 5. Resize
$('#resizeBox').click(enlargeBox);
function enlargeBox() {$('#animator').animate({'width': '300px', 'height': '300px'}, 1000, shrinkBox);}
function shrinkBox() {$('#animator').animate({'width': '200px', 'height': '200px'}, 1000);}

//6. Dragging
$('#draggable').draggable({ containment: [626, 880, 880, 1220] })

});
