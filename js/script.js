$(document).ready(function () {
  const checkBox = document.querySelector('.nav input[type="checkbox"]');
  $('.menu_link').on('click', function(){
    checkBox.checked = false;
    $('body').removeClass('lock')
  });
});

document.addEventListener('change', function () {
  const check = document.querySelector('.nav input[type="checkbox"]');
  if(check.checked){
    $('body').addClass('lock')
  }
  else{
    $('body').removeClass('lock')
  }
});

jQuery(function() {
  $(".menu_link, .logo, .footer_logo, .footer_link").on('click', function(event) {

      if (this.hash !== "") {
          event.preventDefault();
      
          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 1000, function(){
      
              window.location.hash = hash;
          });
      } 
    });
});

const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
    },
});

$(document).ready(function(){
    $('.body_1_photo_content').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        autoplay: false,
    });
});

$(document).ready(function () {
    var element = document.getElementById('number');
    var maskOptions = {
      mask: '+{7} 000 000 00 00'
    };
  
    var mask = IMask(element, maskOptions);
	$('.send').submit(function(e){
		e.preventDefault();
        
      if($("#number").val().length < 16){
          $("#label_notice").css('display','block');
          $("#num_lb").css('display','none')       
          return;
      }
      this.submit()
    });
});

