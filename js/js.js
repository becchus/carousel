$(function() {
  showCarousel();
});

$("#next").click(function() {
  skipImage($(this).attr('id'));
});

function showCarousel() {
  $("img").each(function(index, element) {
    const carouselSize = 3;

    if (index >= 0 && index < carouselSize) {
      $(this).addClass("activePics");
      console.log(index);
    } else {
      $(this).addClass("hiddenPics");
      console.log(this);
    }

  });
}

function skipImage(action) {

  console.log("popo");

  if (action = "next") {

    $("img").each(function(index, value) {

      if ($(this).hasClass("firt")) {
        $(this).removeClass("first");

      } else if ($(this).hasClass("second")) {
        $(this).addClass("first")

      } else if ($(this).hasClass("third")) {
        $(this).addClass("second")
      } else if (index = 2) {
        $(this).addClass("third")
      }
    });

  }
}
