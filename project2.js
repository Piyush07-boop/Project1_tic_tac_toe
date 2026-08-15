let boxex = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// First track which player's turn it is
let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Reset game
const resetGame = () => {
    turnO = true;
    enableBoxex();
    msgContainer.classList.add("hide");
};

// Box click event
boxex.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

// Disable all boxes
const disableBoxex = () => {
    for (let box of boxex) {
        box.disabled = true;
    }
};

// Enable all boxes
const enableBoxex = () => {
    for (let box of boxex) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Show winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxex();
};

// Check winner
const checkWinner = () => {

    for (let pattern of winpatterns) {

        let pos1value = boxex[pattern[0]].innerText;
        let pos2value = boxex[pattern[1]].innerText;
        let pos3value = boxex[pattern[2]].innerText;

        if (
            pos1value !== "" &&
            pos2value !== "" &&
            pos3value !== ""
        ) {
            if (
                pos1value === pos2value &&
                pos2value === pos3value
            ) {
                showWinner(pos1value);
                return;
            }
        }
    }
};

// Button events
NewGameBtn.addEventListener("click", resetGame);
ResetBtn.addEventListener("click", resetGame);