//business logic
function pingPong(input){
	var rangeOfNumbers= [];

	for (var position=1;position <=input ;position++){
		if (position%3===0)&& (position%5===0){
			rangeOfNumbers.push("PingPong");
		}
		// else if (position%5===0){
		// 	rangeOfNumbers.push("Pong");
		// }
		// else if (position%3===0){
		// 	rangeOfNumbers.push("Ping");
		// }
		// else {
		// 	rangeOfNumbers.push(position)
		// }
	};
    return rangeOfNumbers;
};

//user interface
// 