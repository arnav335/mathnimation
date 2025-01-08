import { makeDraggable } from "./utils/makeDraggable";

function rectangle(properties, animation) {
    const rectangleElement = document.createElement("div");
    rectangleElement.style.position = "absolute";
    Object.assign(rectangleElement.style, properties);


    // Ensure properties.childOf is valid
    if (properties.childOf && properties.childOf instanceof HTMLElement) {
        properties.childOf.appendChild(rectangleElement);
    } else {
        console.error("Invalid parent element (properties.childOf)");
        return;
    }

    // Call makeDraggable after the element is correctly appended
    makeDraggable(rectangleElement, animation);
}

export { rectangle };
