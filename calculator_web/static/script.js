let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function toggleSign() {
  let current = eval(display.innerText);
  display.innerText = (-current).toString();
}

function square() {
  let current = eval(display.innerText);
  display.innerText = (current * current).toString();
}

function reciprocal() {
  let current = eval(display.innerText);
  if (current === 0) {
    display.innerText = 'Ошибка';
  } else {
    display.innerText = (1 / current).toString();
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText).toString();
  } catch {
    display.innerText = 'Ошибка';
  }
}

function percent() {
  try {
    let current = eval(display.innerText);
    display.innerText = (current / 100).toString();
  } catch {
    display.innerText = 'Ошибка';
  }
}
