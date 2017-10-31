//business logic
function pingPong(input){
	var rangeOfNumbers= [];

	for (var position=1;position <=input ;position++){
		if ((position%3===0)&& (position%5===0)){
			rangeOfNumbers.push("PingPong");
		}
		else if (position%5===0){
			rangeOfNumbers.push("Pong");
		}
		else if (position%3===0){
			rangeOfNumbers.push("Ping");
		}
		else {
			rangeOfNumbers.push(position)
		}
	};
    return rangeOfNumbers;
};


//function that clears input text field
function clearForm(form) {
        $(':input').not(':button, :submit').val('');
    };

//user interface
$(document).ready(function(){
	$("form#form").submit(function(event){
    	event.preventDefault();
	
	 // $("ul").empty();
	 var input = parseInt($("#input").val());
	 var numbers= pingPong(input);
	 for (var position=0; position<= numbers.length-1;position++){
	 	$("ul#output").append("<li>"+numbers[position]+"</li>");
	 };
  //    clearForm("#input");
     });

});