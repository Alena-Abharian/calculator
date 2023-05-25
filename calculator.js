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
