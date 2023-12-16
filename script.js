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
      $('.overlay').css('display', 'block');
    } else {
      $(this).removeClass('open');
      menuOpen = false;
      $('.overlay').css('display', 'none');
    }
  
    if ($('#sidebar').hasClass('visible')) {
      $('body').css('overflow', 'hidden');
      

    } else {
      $('body').css('overflow', 'auto');
    
    }
    

  });

  $('#sidebar-btn.visible').on('click', function() {
    $('body').css('overflow', 'auto');
  });
  function myFunction() {
    if ($(window).width() < 992) {
      $('.filter').attr("id", "sidebar")
  
    } else {
      $("#sidebar").removeAttr("id");
      $('body').css('overflow', 'auto');
      $('.overlay').css('display', 'none');

    }

  }
  $(window).on('resize', function() {
    myFunction();
  });

  myFunction();
});


// contact-jquery.js
$(document).ready(function() {
  $('#phoneNumber').keypress(function(event) {
    // Check if the pressed key is a number or the backspace key
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 8) {
      // If the pressed key is not a number or backspace, prevent input
      event.preventDefault();
    }
  });

  $('.form-control').on({
    focus: function() {
      // Add the class when focused
      $('#' + this.id + '-label').addClass("decorate-label");
    },
    blur: function() {
      if ($(this).val().trim() === '') {
        $('#' + this.id + '-label').removeClass("decorate-label");
      }
    }
  });

  $('#comments').focus(function() {
    $('#comments-label').addClass("decorate-label"); 
  });

  $('#comments').blur(function() {
    // Check if the input has content
    if ($(this).val().trim() === '') {
      $('#comments-label').removeClass("decorate-label");
    }
  });
});