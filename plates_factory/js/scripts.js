/*********************************************
 * 
 * @author cintiahigashi
 * email: cintiamh@gmail.com
 * 
 * Calculates the combination of letters and 
 * numbers that produces the least number of 
 * excess plates as possible given a population
 * number.
 * 
 *********************************************/

var pop_val;
var result1, result2, result3, result4;

$(document).ready(function() {
	$("#result").hide();
	$("#myform").validate({
		rules : {
			population : {
				required : true,
				digits : true
			}
		},
		submitHandler: function(form) {
			pop_val = $("#population").val();
			calculatePlates(pop_val);
			$("#res_population").text(result1);
			$("#res_pattern").text(result2);
			$("#res_total").text(result3);
			$("#res_excess").text(result4);
			$("#result").show();
			
		}
	});
});

function calculatePlates(population) {
	var numLetters = 0;
	var numNumbers = 0;
	var excess = 0;
	var minExcess = -1;
	var minLetters = 0;
	var minNumbers = 0;
	var minTotal = 0;
	var letters = 0;
	var numbers = 0;
	var total = 0;

	for (numLetters = 0;; numLetters++) {
		for (numNumbers = 0;; numNumbers++) {
			letters = Math.pow(26, numLetters);
			numbers = Math.pow(10, numNumbers);

			total = letters * numbers;
			excess = total - population;

			if (excess >= 0) {
				if (minExcess < 0 || excess < minExcess) {
					minExcess = excess;
					minLetters = numLetters;
					minNumbers = numNumbers;
					minTotal = total;
				}
				break;
			}
		}
		if (letters >= population) {
			break;
		}
	}
	result1 = "" + population;
	result2 = "" + minLetters + " letters, " + minNumbers + " numbers";
	result3 = "" + minTotal;
	result4 = "" + minExcess;
}