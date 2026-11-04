const display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
  if (display) {
    display.textContent = currentInput;
  }
}

function appendValue(val) {
  if (currentInput === '0' || currentInput === 'Error') {
    currentInput = String(val);
  } else {
    currentInput += String(val);
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function deleteChar() {
  if (currentInput.length > 1 && currentInput !== 'Error') {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  try {
    let expr = currentInput.replace(/x/g, '*').replace(/÷/g, '/');
    currentInput = String(eval(expr));
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}