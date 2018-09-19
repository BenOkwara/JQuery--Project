$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeIn();
    $("#initially-hidden").fadeOut();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
  $("#initially-showing").fadeIn();
  $("#initially-hidden").fadeOut();
  });
});
