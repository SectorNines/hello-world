console.log("Script loaded successfully!");

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const text = document.getElementById("text").value;
    const number = document.getElementById("number").value;
    const date = document.getElementById("date").value;
    const list = document.getElementById("list");

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.className = "flex justify-between items-center p-2 bg-white rounded shadow mb-2";
    listItem.innerHTML = `
        <span class="text-gray-800">${text} - $${number} on ${date}</span>
        <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="removeItem(this)">Remove</button>
    `;
    list.appendChild(listItem);

    // Clear the input fields
    document.getElementById("text").value = "";
    document.getElementById("number").value = "";
    document.getElementById("date").value = "";
}   
// Function to remove an item from the list
function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
// Add event listener to the form
document.querySelector("form").addEventListener("submit", handleFormSubmit);
// Add event listener to the remove buttons
document.querySelectorAll(".remove-button").forEach(button => {
    button.addEventListener("click", function() {   
        const listItem = this.parentElement;
        listItem.remove();
    }); 
});
