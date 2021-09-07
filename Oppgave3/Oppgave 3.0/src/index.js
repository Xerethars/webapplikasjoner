// Oppgave 1
const removeButton = document.getElementById("remove-btn");
removeButton.addEventListener("click", function() {
    let textToRemove = document.getElementById("remove");
    textToRemove.remove();
});

// Oppgave 2
const changeButton = document.getElementById("change-btn");
changeButton.addEventListener("click", () => {
    let textToChange = document.getElementById("change");
    textToChange.innerText = "This is my text";
});

// Oppgave 3
const inputTextField = document.getElementById("input");
inputTextField.addEventListener("input", () => {
    let inputTextToShow = document.getElementById("input-text");
    inputTextToShow.innerText = inputTextField.value;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const listButton = document.getElementById("write-list");
listButton.addEventListener("click", () => {
    let listParent = document.getElementById("ul");
    myList.forEach(arrayElement => {
        let listElement = document.createElement("li");
        listElement.innerText = arrayElement;
        listParent.appendChild(listElement);
    });
})

// Oppgave 5
const  createHTMLButton = document.getElementById("create");
createHTMLButton.addEventListener("click", () => {
    
})
// Oppgave 6
// Oppgave 7
// Oppgave 8
