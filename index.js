const inputA = document.querySelector('.input_a');
const inputB = document.querySelector('.input_b');
const selectOperation = document.querySelector('.operation');
const btnResult = document.querySelector('.btn_result');
const output = document.querySelector('.output');

btnResult.addEventListener('click', function (){
    const a= Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOperation.value;

    const result = calculate({a, b, operation});

    console.log(result)


})