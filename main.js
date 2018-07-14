var editButton = document.querySelector("button");
var Textinput = document.querySelector("input");
var span = document.querySelectorAll("span");
var input = document.querySelector("input[type='text']");

editButton.addEventListener("click", function() {
Textinput.style.display="block";
});

input.onkeypress = (function(evt) {
    if (evt.which == 13) {
        var Todo = document.createElement("LI");
        var TodoText = document.createTextNode(this.value);
        TodoText.innerHTML = "<span>&times;</span> " + Todo;
        Todo.appendChild(TodoText);
        document.getElementById("text-holder").appendChild(Todo);
    }
})

for (var i = 0; i < span.length; i++ ) {
    span [i].addEventListener("click", function () {
        this.parentElement.style.display="none";
    });
    }