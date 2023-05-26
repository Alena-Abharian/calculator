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

    output.textContent = result
    console.log(result)

})

const OPERATIONS = {
    summation : "+",
    subtraction: "-",
    multiply: "*",
    division: "/"
}

 function calculate({a, b, operation}){
    let result = null;

    switch (operation){
        case OPERATIONS.summation:
            result = summation(a, b)
            break;

        case OPERATIONS.subtraction:
            result = subtraction(a, b)
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b)
            break;

        case OPERATIONS.division:
            result = division(a, b)
            break;

        default:
            break;
    }

    return result;
}
