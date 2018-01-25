$(document).ready(function() {
  $(".button-collapse").sideNav();
  window.setInterval(function() {
    $(".carousel").carousel('next')
  }, 4500);
});
