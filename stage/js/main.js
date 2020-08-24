$(function () {
  "use strict";

  $(".toggle-sidebar").on("click", function () {
    $(".content-area , .sidebar").toggleClass("no-sidebar");
  });
  // toggle submenu
  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
    console.log("how fe eh msh fahem msh rady yshta8l leee");
  });
  // open close ful screen
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      // page is now full screen
      openFullscreen();
    } else {
      // page is not full screen
      closeFullscreen();
    }
  });
  // toggle settings
  $(".toggle-settings").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-setting");
  });

  // switch colors theme
  var classes = [];
  $(".color-options li").each(function () {
    classes.push($(this).data("theme"));
  });
  $(".color-options li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("body").removeClass(classes.join(" ")).addClass($(this).data("theme"));
  });
});

var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}
