//slide-slick
$(document).ready(function () {
  $(".activity__list").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  });
});

//Back to top
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#go-to-top").fadeIn();
    } else {
      $("#go-to-top").fadeOut();
    }
  });
  $("#go-to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      2000
    );
    return false;
  });
});

//Aos
AOS.init({
  offset: 150,
  delay: 0,
  duration: 1000,
});

/*Active navbar click */
// tablet and moblie
$(document).ready(function () {
  $(".navbar-list li a").click(function () {
    $(".navbar-list li a.active").removeClass("active");
    $(this).addClass("active");
  });
});
// menu toggle
$('.navbar-btn--open').click(function(event) {
  $(".navbar-btn").toggleClass("active");
  // $(".navbar-btn").toggleClass('active', $(this).hasClass('active'));
});
$('.navbar-btn--close').click(function(event) {
  $(".navbar-btn.active").removeClass("active");
});
//nav child
$('.nav-lv-3').click(function(event) {
  $(this).toggleClass("open");
  $('.nav-lv-3').toggleClass('open', $(this).hasClass('open'));
});
//mb evencalendar
$('.current-week__table-mb').click(function(event) {
  $(this).toggleClass("open");
  $(this).toggleClass('open', $(this).hasClass('open'));
});
// const x = document.querySelectorAll('.current-week__table-mb');
// x.forEach(function(item) {
//   item.addEventListener('click', function(){
//     x.forEach(btn =>{btn.classList.remove('open')})
//     this.classList.add('open');
//   })
// })



//slide index
const slides = document.getElementsByClassName("slide");
let slideIndex = 0;
slideShow(slideIndex);

// prev/next slide
function plusSlides(n) {
  slideShow((slideIndex += n));
}
// Show slides with
function slideShow(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showSlidesAuto() {
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlidesAuto, 5000);
}
showSlidesAuto();