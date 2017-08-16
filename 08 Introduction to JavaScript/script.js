age = prompt("What is your age?");
if (age < 0) {
	console.log("Age cannot be negative");
}
if (age == 21) {
	console.log ("happy 21st birthday!!");
}
if (age % 2 == 1) {
	console.log ("your age is odd!");
}
if (Math.sqrt(age) % 1 == 0) {
	console.log("perfect square!");
}