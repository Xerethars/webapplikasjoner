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
    let selectBox = document.getElementById("select");
    let newElement = document.createElement(selectBox.value);
    let textField = document.getElementById("text");
    newElement.innerText = textField.value;
    selectBox.parentElement.appendChild(newElement);
})

// Oppgave 6
const removeLiButton = document.getElementById("remove-li");
removeLiButton.addEventListener("click", () => {
    let list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
});

// Oppgave 7
const nameField = document.getElementById("name");
nameField.addEventListener("input", () => {
    let disableButton = document.getElementById("order");
    let length = nameField.value.length;
    if(length > 4) {
        disableButton.style.borderColor = "red";
        disableButton.disabled = true;
    }
    else {
        disableButton.disabled = false;
        disableButton.style.borderColor = "gray";
    }
});

// Oppgave 8
const borderButton = document.getElementById("color");
borderButton.addEventListener("click", () => {
    let listParent = document.getElementsByClassName("children");
    let childArray = listParent[0].children;

    for(let i = 0; i < childArray.length; i++) {
        let li = childArray[i];
        i % 2 == 0 ? li.style.border = "solid green" : li.style.border = "solid pink";
    }
});