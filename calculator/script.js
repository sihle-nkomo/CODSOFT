const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        display.textContent = value; // Temporary debugging line

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        } else if (value === '⌫') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else if (value === '=') {
            if (currentInput !== '' && previousInput !== '') {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
