document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subscriptionForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formSubmit = (e) => {
            const formData = new FormData(e.target);
            const formDataObj = Object.fromEntries(formData.entries());
            window.electronAPI.formSubmit(formDataObj);
            
            e.target.reset();
        };

        formSubmit(e);
    });
});
