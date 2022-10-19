document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#image-container");
    container.addEventListener("click", e => {
        getCursorPosition(container, e);
    })
})

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y)

    const new_elem = document.createElement("div");
    new_elem.innerHTML = "TEST";
    new_elem.classList.add("overlay");
    new_elem.style.left = `${x}px`;
    new_elem.style.top = `${y}px`;
    canvas.appendChild(new_elem);

    
}