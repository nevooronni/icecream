//custom script



$(document).ready(function() {
	$("button#one").click(function() {
		//back end logic 
   var icecreams = ["CaramelSwirl", "ChocolateFudge", "CoffeeCaramelSwirl", "Vanilla", "Chocolate", "stawberry"];
   icecreams.forEach(function(icecream) {
	 var flavor = icecream;
	 $("p#" + icecream).text(flavor);
    });
	});
	$("button#two").click(function() {
		location.reload();
	});
});