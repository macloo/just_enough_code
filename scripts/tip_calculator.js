$(document).ready(function() {
// we do not need the line above in JSFiddle, but in a standalone file,
// we must have it for jQuery so that the HTML document is fully loaded
// before the jQuery runs

// declare all variables
var meal = 0;
var tax = 0;
var tip_per = 0;
var tip_amt = 0;

// user inputs - listen for changes
// parseFloat() converts the input text to a numeric value

$('#meal').change(function() {
	meal = parseFloat( ($('#meal').val()) );
});

$('#tax').change(function() {
	tax = parseFloat( ($('#tax').val()) );
});

$('#tip').change(function() {
	tip_per = parseFloat( ($('#tip').val()) );
	tip_amt = tip_per * meal / 100;
});


// when button is clicked, math happens
// adding .toFixed(2) ensures that exactly two decimal places are shown
$('#add_all').click(function() {
	$('#tip_amt').text( tip_amt.toFixed(2) );
	$('#total').text( (meal + tax + tip_amt).toFixed(2) );
});


// the line below closes the $(document).ready function in line 1 of this file
}); // do not delete
