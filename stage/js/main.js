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
});
