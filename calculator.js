function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

document.getElementById('add').addEventListener('click', () => {
    const [n1, n2] = getInputValues();
    document.getElementById('calculation-result').textContent = add(n1, n2);
});

document.getElementById('subtract').addEventListener('click', () => {
    const [n1, n2] = getInputValues();
    document.getElementById('calculation-result').textContent = subtract(n1, n2);
});

document.getElementById('multiply').addEventListener('click', () => {
    const [n1, n2] = getInputValues();
    document.getElementById('calculation-result').textContent = multiply(n1, n2);
});

document.getElementById('divide').addEventListener('click', () => {
    const [n1, n2] = getInputValues();
    document.getElementById('calculation-result').textContent = divide(n1, n2);
});
