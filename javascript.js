const grid_container = document.querySelector(".container");

for(let i = 0; i < 16 * 16; i++){
    const block = document.createElement("div");
    block.classList.add('cell');

    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "#B2AC88"
    })

    grid_container.appendChild(block);
}

const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    let new_grid = prompt("Enter new grid dimensions (No greater than 100");

    new_grid = parseInt(new_grid);
    if (isNaN(new_grid) || new_grid < 1 || new_grid > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
  }

    grid_container.innerHTML = "";

    for(let i = 0; i < new_grid * new_grid; i++){
        const block = document.createElement("div");
        block.classList.add('cell');
        block.style.width = (600 / new_grid) + 'px';
        block.style.height = (600 / new_grid) + 'px';


        block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "#B2AC88"
    })

    grid_container.appendChild(block);
}
})



