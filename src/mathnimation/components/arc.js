import { createElement } from "./element";

function arc(id, properties = {}, animation = {}) {
    // Set default values if not provided by the user
    const defaultProperties = {
        curvature: "50%",
        radius: "50px",
        arcSlice: {
            color: "white",
            angle: "360deg"
        },
        childOf:document.getElementsByTagName("body"[0])
    };

    // Merge user properties with default properties
    const { curvature, radius, arcSlice } = { ...defaultProperties, ...properties };

    // If animation is empty, leave it as an empty object
    const { curvature: curvatureAnimation, radius: radiusAnimation, arcSlice: arcSliceAnimation } = animation;

    // If animation has radius, set width and height for the element
    if (radiusAnimation) {
        animation.width = radiusAnimation;
        animation.height = radiusAnimation;
    }

    // If animation has curvature, set border radius
    if (curvatureAnimation) {
        animation.borderRadius = curvatureAnimation;
    }

    // If animation has arcSlice, set background with conic gradient
    if (arcSliceAnimation) {
        animation.background = `conic-gradient(${arcSliceAnimation.color} 0deg ${arcSliceAnimation.angle}, transparent ${arcSliceAnimation.angle} 360deg)`;
    }

    // Create the element with updated properties and animation
    const arcElement = createElement(id, properties, animation);

    // Apply the styles to the created element
    arcElement.style.width = radius;
    arcElement.style.height = radius;
    arcElement.style.borderRadius = curvature;
    arcElement.style.backgroundClip = "content-box"; // This ensures the background respects the border-radius
    arcElement.style.backgroundSize = "100% 100%"; // Ensure the gradient fully covers the element

    arcElement.style.background = `conic-gradient(${arcSlice.color} 0deg ${arcSlice.angle}, transparent ${arcSlice.angle} 360deg)`;
}

export { arc };
