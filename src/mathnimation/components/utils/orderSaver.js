// Function to save the order of elements inside #app to localStorage
function saveElementOrder() {
    const elements = document.querySelectorAll('#app > *'); // Select all children inside #app
    const order = Array.from(elements).map(element => element.id); // Get the ids of all children
    localStorage.setItem("elementOrder", JSON.stringify(order)); // Save the order in localStorage
}

// Function to load and rearrange the elements based on the saved order
function loadElementOrder() {
    const order = JSON.parse(localStorage.getItem("elementOrder")); // Load the saved order

    if (order) {
        const parent = document.getElementById("app"); // Get the parent container
        const elements = Array.from(parent.children); // Get the current elements inside the parent

        // Rearrange the elements based on the saved order
        order.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                parent.appendChild(element); // Re-attach element in the correct order
            }
        });
    }
}

export {saveElementOrder,loadElementOrder}
