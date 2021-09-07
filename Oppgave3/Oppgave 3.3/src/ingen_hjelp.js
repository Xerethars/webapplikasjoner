const words = ["test", "Robert", "Honda"];
let wrong = 0;
let position = 0;
let word = "";
const letterField = document.getElementById("letter");
const wordField = document.getElementById("word");

const startGame = () => {
    resetUI();
    printWord();
    document.addEventListener("keyup", playGame);
}


const printWord = () => {
    if(position > words.length - 1) {
        document.getElementById("word").innerText = "Ingen flere ord";
        endGame();
        return;
    }
    document.getElementById("word").innerText = words[position];
}

const playGame = (event) => {
    let wordLength = words[position].length;
    event.key != "Shift" ? (word += event.key, letterField.innerText = word): null;

    if(word.length == wordLength) {
        checkWord();
    }
    /*else {
        wordField.innerText = words[position];
        let length = word.length;
        wordField.innerText[length] = "<mark>" + wordField.innerText[length] + "</mark>";
    }*/

}

const checkWord = () => {
    if(word !== words[position]) {
        wrong++;
    }
    position++;
    word = "";
    printWord();
}

const endGame = () => {
    document.removeEventListener("keyup", playGame);
    letterField.innerText = "Spillet er nå ferdig, trykk på startknappen for å prøve igjen";
    position = 0;
    word = "";
    document.getElementById("wrongs").innerText = "Antall feil: " + wrong;
    wrong = 0;
}

const resetUI = () => {
    letterField.innerText = "Bokstaven du skrev kommer her";
    wordField.innerText = "Ord kommer her";
    document.getElementById("wrongs").innerText = "Anntall feil kommer her";
}

const button = document.querySelector("button");
button.addEventListener("click", startGame);
