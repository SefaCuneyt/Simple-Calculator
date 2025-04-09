let currentInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function setOperator(op) {
    operator = op;
    currentInput += ' ' + op + ' ';
    updateResult();
}

function clearInput() {
    currentInput = '';
    operator = '';
    updateResult();
}

function calculateResult() {
    const expression = currentInput.replace(/[^-()\d/*+.]/g, '');
    try {
        const result = eval(expression);
        currentInput = result.toString();
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
