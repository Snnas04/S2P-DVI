document.getElementById('subscriptionForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather the form data
    const form = event.target;
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    try {
        const result = await window.electronAPI.sendFormData(formObject);
        console.log(result.message); // Log the result received from the main process
    } catch (error) {
        console.error(error);
    }
});

async function submitForm() {
    const form = document.getElementById('subscriptionForm');
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    try {
        const result = await window.electronAPI.sendFormData(formObject);
        console.log(result.message); // Log the result received from the main process
    } catch (error) {
        console.error(error);
    }
}
