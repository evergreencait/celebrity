$(document).ready(function() {
  $("form#preferences").submit(function(event) {
    event.preventDefault();
    var userAge = parseInt($("#age").val());
    var userGenderPreference = $("input:checked").val();

    if (userAge && userGenderPreference) {

      if (userAge > 30 && userGenderPreference === "female") {
        $(".meryl").show();
      } else if () {

      } else if () {

      } else {

      }

    } else {
      alert("not good");
    }

  });
});
