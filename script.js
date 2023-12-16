$(document).ready(function(){
    $('.third-content img').hover(function(){
      $(this).css('transform', 'scale(1.2)'); 
    }, function(){
      $(this).css('transform', 'scale(1)'); 
    });
  });
  
  $(document).ready(function(){
    $('.second-content img').hover(function(){
      $(this).css('opacity', '0.9'); //overlay effects
    }, function(){
      $(this).css('opacity', '1');
    });
  });