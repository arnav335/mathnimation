function startAnimations(element,animation){
    const temp = {}
    Object.assign(temp,animation)
    const type = temp.type
    delete temp.type
    if (type == "to") {
        gsap.to(element, temp)

    } else if (type == "from") {
        gsap.from(element, temp)
    }
    
    
}
export {startAnimations}