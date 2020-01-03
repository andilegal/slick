// mobile
$(".your-class").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "90px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "80px",
        slidesToShow: 1
      }
    }
  ]
});

//Desktop
$(".multiple-items").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".img-menores"
});
$(".img-menores").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: ".multiple-items",
  dots: true,
  //   centerMode: true,
  focusOnSelect: true
});
