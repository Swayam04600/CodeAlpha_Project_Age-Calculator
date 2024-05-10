document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const birthdateInput = document.getElementById('birthdate');
    const resultElement = document.getElementById('result');

    calculateBtn.addEventListener('click', calculateAge);
    resetBtn.addEventListener('click', resetForm);

    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        const currentDate = new Date();

        // Calculate age in years
        let age = currentDate.getFullYear() - birthdate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const birthMonth = birthdate.getMonth();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthdate.getDate())) {
            age--;
        }

        resultElement.textContent = `You are ${age} years old!`;
    }

    function resetForm() {
        // Clear the input and result
        birthdateInput.value = '';
        resultElement.textContent = '';
    }
});
