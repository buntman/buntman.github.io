$(document).ready(function(){
    $('.third-content img').hover(function(){
      $(this).css('transform', 'scale(1.2)'); // Scale to 1.2 times the original size
    }, function(){
      $(this).css('transform', 'scale(1)'); // Scale back to the original size
    });
  });
  
  $(document).ready(function(){
    $('.second-content img').hover(function(){
      $(this).css('opacity', '0.9'); // Or toggle a class for overlay effects
    }, function(){
      $(this).css('opacity', '1');
    });
  });