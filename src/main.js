import $ from "jquery";
$(window).scroll(function () {
  if ($(window).scrollTop() >= 20) {
    $("#site-header").addClass("sticky");
  } else {
    $("#site-header").removeClass("sticky");
  }
});

