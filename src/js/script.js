const field = document.querySelector('.culc-body__form-inp');
const equal = document.querySelector('.equal');
const ac = document.querySelector('.ac');
const percent = document.querySelector('.percent');

field.addEventListener('keydown', function(event) {
    const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        '+', '-', '*', '/', '%', '.', '(', ')',
        'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'
    ];

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
})

field.addEventListener('keydown', function(event) {
    if (event.key ===  'Enter') {
        calculate()
    }
});

function appendToDisplay(input) {
    if (field.value.length === 0 && input === '+' || field.value.length === 0 && input === '*' || field.value.length === 0 && input === '/' || field.value.length === 0 && input === '.' || field.value.length === 0 && input === '00') {
        return
    } else {
        field.value += input;
    }
}

function clearDisplay() {
    field.value = "";
}

function calculate() {    
    const firstChar = field.value.charAt(0);
    const lastChar = field.value[field.value.length - 1];

    if (lastChar === '+' || firstChar === '+' || lastChar === '-' || lastChar === '÷' || firstChar === '÷' || lastChar === '×' || firstChar === '×') {
        clearDisplay()
    } else {
        field.value = eval(field.value); 
    }
}

function changeSign() {
    if (field.value.startsWith('-')) {
        field.value = field.value.slice(1);
    } else {
        field.value = '-' + field.value;
    }
}

function calculatePercentage() {
    if (field.value === '') return;
    
    field.value = (parseFloat(field.value) / 100).toString();
}

function calcPercent() {

    if (field.value.length > 0) {
        appendToDisplay('%');
    }  

    if (field.value.includes('%')) {
        try {
            let expression = field.value;
            
            // Замінюємо числа з відсотками на їх значення, наприклад "20%" на "0.2"
            expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
                return parseFloat(number) / 100;
            });
            
            // Виконуємо обчислення виразу
            field.value = eval(expression);
        } catch (e) {
            field.value = 'Error';
        }
    }
   
}





