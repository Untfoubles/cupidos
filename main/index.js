// Function to add a new input field
function addInputField() {
    // Create a new input field element
    let inputField = document.createElement('div');
    inputField.classList.add('input-field');
    inputField.innerHTML = `
        <input type="text" placeholder="Enter your email" required>
    `;

    // Append the new input field to the container
    document.getElementById('input-container').appendChild(inputField);
}

// Add event listener to the "Add Field" button
document.getElementById('add-field-btn').addEventListener('click', addInputField);
