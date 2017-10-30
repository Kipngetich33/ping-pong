var divisible3 = function(input){
	if input%3===0;
	return true};
	else {
		return false;
	}

var divisible5 = function(input){
	if input%5===0;
	return true};
	else {
		return false;
	}
var divisible3n5 = function(input){
	if (input%3===0) && (input%5===0){
		return true;
	}
	else {
		return false;
	}


$(document).ready(function(){
    
	$("#form").submit(function(event){
		var number= $("input").val();

		$("#output").append("<li>"+number+"</li>");

		event.preventDefault();

	});


});