$(document).ready(function() {
  $("form#preferences").submit(function(event) {
    event.preventDefault();
    var userAge = parseInt($("#age").val());

    var userGenderPreference = $("input:checked").val();
        debugger;
  });
});
