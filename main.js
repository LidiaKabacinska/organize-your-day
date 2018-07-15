let editButton = document.querySelector("button");
let Textinput = document.querySelector("input");
let span = document.querySelectorAll("span");
let input = document.querySelector("input[type='text']");

editButton.addEventListener("click", function() {
Textinput.style.display="block";
});

input.onkeypress = (function(evt) {
    if (evt.which == 13) {
        let Todo = document.createElement("LI"); 
        let TodoText = this.value; 
        Todo.innerHTML = '<span onclick="removeItem(this)">&#x2718;</span>' + TodoText; 
        document.getElementById("text-holder").appendChild(Todo);
    }
})

    function removeItem(elem) {
        elem.parentElement.remove();
    }