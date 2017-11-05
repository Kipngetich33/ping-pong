//business logic

//comment out the animation
// function animate(){
// 	for(var index=0;index<=1000;index++){
// 		if (index<=100){
// 			$("h1#ping-pong-title").fadeOut();
// 			$("h1#ping-pong-title").text("ping");
// 			$("h1#ping-pong-title").fadeIn();
// 			$("h1#ping-pong-title").fadeOut();
// 		}
// 		else if(index<=200){
// 			$("h1#ping-pong-title").text("pong");
// 			$("h1#ping-pong-title").fadeIn();
// 			$("h1#ping-pong-title").fadeOut();
// 		}
// 		else if (index<=300){
// 			$("h1#ping-pong-title").text("Ping-Pong");
// 			$("h1#ping-pong-title").fadeIn();
// 			$("h1#ping-pong-title").fadeOut();
// 		}
// 	    else{
// 	    	index=0;
// 	    }
// 	};
// };
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
    // animate();

// this section allow the side bar.main-column and top divs to slide in when the page is refreshed
    $("#sidebar").slideToggle();
    $("#top").slideToggle();
    $("#main-column").slideToggle();

	$("form#form").submit(function(event){
    	event.preventDefault();
//add animation to the pingpong title
     $("#ping-pong-title").fadeOut();
     $("#ping-pong-title").fadeIn();
     $("#exclamation h3").fadeOut();
     $("#exclamation h3").fadeIn();
     $(".align-center").hide();
     $("#ol-rules").hide();
     $("#blink").slideToggle();

	 $("ul#output").empty();
	 var input = parseInt($("#input").val());
	 var numbers= pingPong(input);
	 for (var position=0; position<= numbers.length-1;position++){
	 	$("ul#output").append("<li>"+numbers[position]+"</li>");
	 };
     clearForm("#input");
     });
	$("button#blink").click(function(event){
		event.preventDefault();
		$("ul#output").empty();
		$(".align-center").show();
     	$("#ol-rules").show();

	})

});