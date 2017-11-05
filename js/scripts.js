//business logic
// function animate(){
// 	while(var index=1;index<1000000000000;index++){
// 		$("h1#ping-pong-title").text("ok5");
// 		$("h1#ping-pong-title").text("ok5");

// 	}
// }

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
	$("h1#ping-pong-title").slideOut();
	$("h1#ping-pong-title").text("ping");
	$("h1#ping-pong-title").slideIn();
	$("h1#ping-pong-title").slideOut();
	$("h1#ping-pong-title").text("pong");
	// $("h1#ping-pong-title").fadeIn();
	// $("h1#ping-pong-title").fadeOut();
	// $("h1#ping-pong-title").text("Ping-Pong");
	// $("h1#ping-pong-title").fadeIn();

	// $("h1#ping-pong-title").text("oklllll");
	$("form#form").submit(function(event){
    	event.preventDefault();
//add animation to the pingpong title
    
	 $("ul").empty();
	 var input = parseInt($("#input").val());
	 var numbers= pingPong(input);
	 for (var position=0; position<= numbers.length-1;position++){
	 	$("ul#output").append("<li>"+numbers[position]+"</li>");
	 };
     clearForm("#input");
     });

});