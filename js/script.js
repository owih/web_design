$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:false,
        slidesToScroll: 1,
        infinite: true,
        speed: 600,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]

    });
});
$(document).ready(function() {
    $('.example2').hide().before('<a href="#" id="toggle-example2" class="button">Показать еще</a>');
    $('a#toggle-example2').click(function() {
        $('.example2').slideToggle("fast");
        return false;
        
        });
});
$(document).ready(function() {
    document.getElementById('toggle-example2').onclick = function() {
        document.getElementById('toggle-example2').hidden = true;
      }
});
$(document).ready(function() {
    $('.example3').hide().before('<a href="#" id="toggle-example3" class="button">Показать еще</a>');
    $('a#toggle-example3').click(function() {
        $('.example3').slideToggle("fast");
        return false;
        
        });
});
$(document).ready(function() {
    document.getElementById('toggle-example3').onclick = function() {
        document.getElementById('toggle-example3').hidden = true;
      }
});
$(document).ready(function(){
    const navOffset = $("#nav").offset().top;
    $(window).scroll(function(){
        const scrolled = $(this).scrollTop();
        if (scrolled > navOffset) {
            $("#wrapper").addClass("nav-fixed");
        } else if (scrolled < navOffset) {
            $("#wrapper").removeClass("nav-fixed");
        }
    })
})