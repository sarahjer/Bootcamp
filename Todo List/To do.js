var todos = ["Buy"];
var input = prompt("what would you like to do?");

while(input != "quit") {
	if( input === "list" ) {
		ListTodos();
	} else if(input == "new" ) {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();	
	}
	input = prompt("what would you like to do?");
}
console.log("OK,You Quit");

function ListTodos() {
	console.log("*********");
	todos.forEach(function(todo, i) {
	console.log(i + ": " + todo);
	});
	console.log("*********");
}

function Addtodo() {
	var newTodo = prompt("Enter New ToDo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	var index = prompt("Enter index of Todo to delete");
	todos.splice(index, 1);
	console.log("Deleted Todo");
	}