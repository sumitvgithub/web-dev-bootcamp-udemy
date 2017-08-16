var input = prompt("What would you like to do?");

var todos = new Array;

while (input !== "quit") {
	if (input === "list") {
		listTodo();
	}
	else if (input === "new"){
		newTodo();
	}
	else if (input === "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log("YOU QUIT THE APP!");

function listTodo() {
	console.log("***************");
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		})
		console.log("***************");
}

function newTodo() {
	var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("ToDo added");
}

function deleteTodo() {
	var index = prompt("Enter the index of todo to delete");
		todos.splice(index, 1);		
		console.log("ToDo deleted");
}