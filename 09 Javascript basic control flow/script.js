secretNumber = 4

stringNumber = prompt("Guess a number");
guess = Number(stringNumber);

// if (guess === secretNumber) {
// 	alert("You guessed it RIGHT!");
// }
while (guess != secretNumber) {

	if (guess > secretNumber) {
		alert ("Too high! Guess again!");

	}
	else {
		alert("Too low! Guess again!");
	}
	stringNumber = prompt("Guess a number");
	guess = Number(stringNumber);
}
alert("You guessed it RIGHT!");