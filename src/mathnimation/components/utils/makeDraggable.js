import { startAnimations } from "./startAnimations";

function getElementPath(el) {
    // Ensure the element is valid
    if (!el) {
        return ''; // Return an empty string if the element is invalid
    }

    const path = [];
    let current = el;
    while (current) {
        const tagName = current.tagName ? current.tagName.toLowerCase() : ''; // Ensure tagName is available
        if (!tagName) break; // Exit if tagName is invalid (for safety)

        const index = Array.from(current.parentNode?.children || []).indexOf(current);
        path.unshift(`${tagName}[${index}]`);
        current = current.parentNode;
    }
    return path.join(" > ");
}

function makeDraggable(element, animationConfig) {
    // Generate a unique storage key
    const storageKey = element.dataset.id
        ? `draggable-${element.dataset.id}` // Use data-id if available
        : `draggable-${getElementPath(element)}`; // Fallback to DOM path

    // Start the animations if they exist when initializing the element
    startAnimations(element, animationConfig);

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Load position from localStorage
    const savedPosition = JSON.parse(localStorage.getItem(storageKey));
    if (savedPosition) {
        element.style.left = `${savedPosition.left}px`;
        element.style.top = `${savedPosition.top}px`;
        element.style.position = "absolute"; // Ensure correct positioning
    }

    // Ensure the element is positioned absolutely for dragging
    if (getComputedStyle(element).position === "static") {
        element.style.position = "absolute";
    }

    // Handle mouse down
    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;

        // Stop all GSAP animations for this element during drag
        gsap.killTweensOf(element);

        element.style.cursor = "grabbing";
    });

    // Handle mouse move
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const newLeft = e.clientX - offsetX;
            const newTop = e.clientY - offsetY;

            element.style.left = `${newLeft}px`;
            element.style.top = `${newTop}px`;

            // Save position to localStorage
            localStorage.setItem(storageKey, JSON.stringify({ left: newLeft, top: newTop }));
        }
    });

    // Handle mouse up
    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;

            // Restart animations after dragging stops
            startAnimations(element, animationConfig);

            element.style.cursor = "grab";
        }
    });

    // Set initial cursor style
    element.style.cursor = "grab";
}

export { makeDraggable };
