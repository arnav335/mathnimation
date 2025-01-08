import {  saveElementOrder } from "./orderSaver";

let selectedElement = null; // Start with no element selected

function zChanger(element) {

    // Set the element as selected when clicked
    element.addEventListener("click", () => {
        selectedElement = element; // Update selectedElement to the clicked element

    });

}

//In html the lower ur position is the more on top u go of the other ;-;
// Function to move the selected element up (before its previous sibling)
function moveUp() {
    if (selectedElement) {
        const parent = selectedElement.parentNode;
        const nextSibling = selectedElement.nextElementSibling;
        if (nextSibling) {
            parent.insertBefore(nextSibling, selectedElement);
            saveElementOrder()
        }
    }

}

// Function to move the selected element down (after its next sibling)
function moveDown() {
    if (selectedElement) {
        const parent = selectedElement.parentNode;
        const prevSibling = selectedElement.previousElementSibling;
        if (prevSibling) {
            parent.insertBefore(selectedElement, prevSibling);
            saveElementOrder()

        }
    }
}

// Event listener for keydown to handle up and down arrow keys
document.addEventListener("keydown", (event) => {
    if (selectedElement) {
        if (event.key === "ArrowUp") {
            moveUp();

        } else if (event.key === "ArrowDown") {
            moveDown();
        }
    }
});


export { zChanger }