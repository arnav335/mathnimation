import { startAnimations } from "./startAnimations";

// Function to initialize draggable element
function makeDraggable(element, animationConfig) {
    // Check if the element has an ID
    if (!element.id) {
        console.error('Element must have an ID for persistence!');
        return;
    }

    const storageKey = `draggable-${element.id}`;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Load position from localStorage (if any)
    const savedPosition = JSON.parse(localStorage.getItem(storageKey));
    if (savedPosition) {
        element.style.left = `${savedPosition.left}px`;
        element.style.top = `${savedPosition.top}px`;
        element.style.position = "absolute";
    }

    // Ensure absolute positioning for dragging
    if (getComputedStyle(element).position === "static") {
        element.style.position = "absolute";
    }

    // Track animation state
    let animationStarted = false;
    let tween = null;

    // Handle mouse down event
    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;

        // Pause GSAP animation when dragging starts
        if (tween) {
            tween.pause();
        }

        element.style.cursor = "grabbing";
    });

    // Handle mouse move event
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const newLeft = e.clientX - offsetX;
            const newTop = e.clientY - offsetY;

            element.style.left = `${newLeft}px`;
            element.style.top = `${newTop}px`;

            // Save position to localStorage using the element's ID
            localStorage.setItem(storageKey, JSON.stringify({
                id: element.id,
                left: newLeft,
                top: newTop,
            }));
        }
    });

    // Handle mouse up event
    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;

            // Restart animation after dragging finishes
            if (!animationStarted) {
                if(animationConfig != {}){
                    startAnimations(element, animationConfig);
                    animationStarted = true;
                    console.log("JS IS DUMB");
                    
                }
            }

            // Resume GSAP animation after dragging finishes
            if (tween) {
                tween.resume();
            }

            element.style.cursor = "grab";
        }
    });

    // Set initial cursor style
    element.style.cursor = "grab";

    // Start initial animations when the element is created
    if (!animationStarted) {
        
        if((!animationConfig)&&(typeof animationConfig == "object" && Object.keys(animationConfig).length != 0)){    
            tween = startAnimations(element, animationConfig); // Store the tween object
            animationStarted = true;
        }
      
    }
}

export { makeDraggable };
