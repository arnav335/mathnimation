import { makeDraggable } from "./utils/makeDraggable";
import { zChanger } from "./utils/zChanger";

function createElement(id, properties, animation) {
    const element = document.createElement(properties.tag || "div");
    element.style.position = "absolute";
    element.id = id
    Object.assign(element.style, properties);

    // Ensure the parent is valid
    if (properties.childOf && properties.childOf instanceof HTMLElement) {
        properties.childOf.appendChild(element);
    } else {
        console.error("Invalid parent element (properties.childOf)");
        return 
    }

    // Make the element draggable
    makeDraggable(element, animation);
    zChanger(element)
    return element
}

export { createElement };
