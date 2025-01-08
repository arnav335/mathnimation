function startAnimations(element, animation) {
    const temp = { ...animation }; // Create a shallow copy of the animation object
    const type = temp.type;
    delete temp.type; // Remove the type property to use the rest for animation parameters

    let tween;
    if (type === "to") {
        tween = gsap.to(element, temp); // Create the "to" tween
    } else if (type === "from") {
        tween = gsap.from(element, temp); // Create the "from" tween
    }

    return tween; // Return the tween object so it can be controlled (paused/resumed)
}

export { startAnimations };
