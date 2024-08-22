const display = document.getElementById('display');
const displayText = document.getElementById('display-text');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';


function calculate(expression) {
    try {
        return new Function('return ' + expression)();
    } catch {
        return 'Error';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            displayText.textContent = '0';
        } else if (value === '⌫') {
            currentInput = currentInput.slice(0, -1);
            displayText.textContent = currentInput || '0';
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else if (value === '=') {
            if (currentInput !== '' && previousInput !== '') {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                displayText.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else {
            currentInput += value;
            displayText.textContent = currentInput;
        }
    });
});

