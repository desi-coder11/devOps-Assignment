// Get references to the form and formEditor elements
const jsonForm = document.getElementById('jsonForm');
const jsonOutputLevel2 = document.getElementById('jsonOutputLevel2');
const jsonOutputLevel3 = document.getElementById('jsonOutputLevel3');

// Function to handle form submission
function submitJsonForm(event) {
    event.preventDefault();

    // Get the JSON data from the textarea
    const jsonData = document.getElementById('jsonData').value;

    try {
        // Parse the JSON data into a JavaScript object
        const jsonObject = JSON.parse(jsonData);

        // Level 2 JSON Output - Display as it is
        jsonOutputLevel2.textContent = JSON.stringify(jsonObject, null, 2);

        // Level 3 Editable JSON Output
        jsonOutputLevel3.innerHTML = '';
        for (const key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
                const divContainer = document.createElement('div');
                divContainer.className = 'form-row';

                const label = document.createElement('label');
                label.textContent = key;

                const input = document.createElement('input');
                input.type = 'text';
                input.value = jsonObject[key];
                input.name = key;

                divContainer.appendChild(label);
                divContainer.appendChild(input);
                jsonOutputLevel3.appendChild(divContainer);
            }
        }
    } catch (error) {
        // Handle JSON parsing errors here
        console.error('Error parsing JSON:', error);
        jsonOutputLevel2.innerHTML = '<p class="error-message">Invalid JSON data. Please enter valid JSON.</p>';
        jsonOutputLevel3.innerHTML = '<p class="error-message">Invalid JSON data. Please enter valid JSON.</p>';
    }
}
