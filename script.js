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

// HAMBURGER MENU
  $(document).ready(function() {
    $(".burger-menu").click(function() {
        $(this).toggleClass("fa-times");
        $(".navigation-menu").toggleClass("active");
    });
});

// SHOP IMAGE HOVER EFFECTS
$(document).ready(function(){
  $('.shop-image .thumbnail').hover(function(){
    $(this).css('transform', 'scale(1.1)'); 
  }, function(){
    $(this).css('transform', 'scale(1)'); 
  });
}); 

// HOME THUMBNAIL HOVER EFFECTS
$(document).ready(function(){
  $('.thumbnail-holder').hover(function(){
    $(this).css('transform', 'scale(1.05)'); 
  }, function(){
    $(this).css('transform', 'scale(1)'); 
  });
}); 


// SHOP'S SIDEBAR
$(document).ready(function() {
  var menuOpen = false;
  $('#sidebar-btn').on('click', function() {
    $('#sidebar, #sidebar-btn').toggleClass('visible');
    if (!menuOpen) {
      $(this).addClass('open');
      menuOpen = true;
    } else {
      $(this).removeClass('open');
      menuOpen = false;
    }
    
    $('.overlay').toggle();
    
    if ($('#sidebar').hasClass('visible')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
    }
  });
  $('#sidebar-btn.visible').on('click', function() {
    $('body').css('overflow', 'auto');
  });
  var x = window.matchMedia("(max-width: 992px)");

  function myFunction(x) {
    if (x.matches) {
      $('.filter').attr("id", "sidebar")
    } else {
      $("#sidebar").removeAttr("id");
    }

  }
  x.addListener(function() {
    myFunction(x);
  });
});