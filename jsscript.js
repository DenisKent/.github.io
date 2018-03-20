$(document).ready(function(){
    //Function to adjust the bodt top margin to ensure that the header does not overlap with content
    $('body').each(function(){
      var headerHeight=$('header').height();
      $(this).css('margin-top',headerHeight);
    });
    //Highlight active nav section
    $(document).on("scroll", onScroll);

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Store header height
      var headerHeight = $('header').height();
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: ($(hash).offset().top - headerHeight)
      }, 300, function(){
      });
    } // End if
  });
});

function onScroll(event){
        var scrollPos = $(document).scrollTop() + $('header').height();
        $('header a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('header ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
