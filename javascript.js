const grid_container = document.querySelector(".container");

for(let i = 0; i < 16 * 16; i++){
    const block = document.createElement("div");
    block.classList.add('cell');

    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "#B2AC88"
    })

    grid_container.appendChild(block);
}

const resetButton = document.createElement("button");
resetButton.classList.add("reset");

resetButton.textContent = "Reset";
resetButton.style.color = "#e8e2f7ff";
resetButton.style.backgroundColor = "#212121";


