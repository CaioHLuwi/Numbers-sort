// Quantidade de números
const quantityNumbers = document.querySelector('#number1');
// Número inicial
const fromNumber = document.querySelector('#number2');
// Número máximo
const maxNumber = document.querySelector('#number3');

const sortButton = document.querySelector('#sort-btn');
const sortAgainButton = document.querySelector('#sort-again');

const sortDiv = document.querySelector('.content-form');
const resultDiv = document.querySelector('.content-result');

const numbersArea = document.querySelector('.numbers');

let quantity
let from
let max


function getRandomNumber(min, max, quantity) {
    let numbers = [];

    for(i = 0; i < quantity; i++) {
        numbers.push(Math.round(Math.random() * (max - min)) + min);
    }
    
    return numbers;
}

function createNumber(numbers) {
    resultDiv.style.display = 'flex';

    numbers.forEach((number) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');

        const numberText = document.createElement('span');
        numberText.textContent = number;

        numberElement.appendChild(numberText);
        numbersArea.appendChild(numberElement);
    })
}

sortButton.addEventListener('click', (event) => {
    event.preventDefault();

    quantity = quantityNumbers.value;
    from = fromNumber.value;
    max = maxNumber.value;

    max = Number(max);
    from = Number(from);

    sortDiv.style.display = 'none';

    createNumber(getRandomNumber(from, max, quantity));

    return quantity, from, max;
});

sortAgainButton.addEventListener('click', () => {
    document.querySelectorAll('.number').forEach((element) => {
        element.remove();
    })

    createNumber(getRandomNumber(from, max, quantity));
});


