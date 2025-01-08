import { loadElementOrder } from "./components/utils/orderSaver"



function init() {
    
    const app = document.getElementById("app")
    app.style.width = "100vw"
    app.style.height = "100vh"
    app.style.backgroundColor = "#000010"
    app.style.position = "relative"
    document.addEventListener("DOMContentLoaded", () => {
        loadElementOrder()
    });

    return app
}
export { init }