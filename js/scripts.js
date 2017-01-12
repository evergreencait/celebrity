$(document).ready(function() {
  $("form#preferences").submit(function(event) {
    event.preventDefault();
    var userAge = parseInt($("#age").val());
    var userGenderPreference = $("input:checked").val();

    if (userAge && userGenderPreference) {

      if (userAge > 30 && userGenderPreference === "female") {
        $(".emma").hide();
        $(".sean").hide();
        $(".zac").hide();
        $(".meryl").show();
      } else if (userAge < 30 && userGenderPreference === "female") {
        $(".meryl").hide();
        $(".sean").hide();
        $(".zac").hide();
        $(".emma").show();
      } else if (userAge > 30 && userGenderPreference === "male") {
        $(".emma").hide();
        $(".meryl").hide();
        $(".zac").hide();
        $(".sean").show();
      } else if (userAge < 30 && userGenderPreference === "male") {
        $(".emma").hide();
        $(".sean").hide();
        $(".meryl").hide();
        $(".zac").show();
      }

    } else {
      // $("#age").addClass("has-error");
      // $("#gender").addClass("has-error");
      alert("please answer us");
    }

  });
});
