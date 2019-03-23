console.log("toto");

$(document).ready( function() {
  $("#innercontainer").each(function(index, value) {
    const carouselSize = 3;

    if (index <= carouselSize) {
      value.addClass("activePics");
    } else {
      value.addClass("hiddenPics");
    }

  });
});

function skipImage() {
  $("#innercontainer").each(function(index, value) {
      if ($(this).hasClass("activePics")) {
          $(this).animate({
          display: 'show',
          opacity: '1',
          width: '20vw'

      });

      } else if ($(this).hasClass("hiddenPics")) {
          $(this).show();
      }
    }
  }
