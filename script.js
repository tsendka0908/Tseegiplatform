const header = document.querySelector("header");
const button = document.querySelector("button");
const colors = ["violet", "red", "green", "blue", "black", "white"];

header.backgroundColor = "violet";

button.addEventListener("click", function () {
    const colorindex = parseInt(Math.random() * colors.length);
    header.style.backgroundColor = colors[colorindex];
});
