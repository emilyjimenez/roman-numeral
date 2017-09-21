// Business logic here:
function convertNumeral(number) {
var
}
return

// UI logic here:
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#inputForm").val());
    $("#result").text(convertNumeral(numberInput))
  });
});
