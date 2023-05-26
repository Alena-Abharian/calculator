let a = '';
let b = '';
let sing = ''; //operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

const screen = document.querySelector('.calc_screen p');
const out = document.querySelector('.ac')
const calcBtn = document.querySelector('.buttons');

function clearAll () {
    a = '';
    b = '';
    sing = '';
    finish = false;
    screen.textContent = '0';
}

out.addEventListener('click', function (){
    clearAll()
})

calcBtn.addEventListener('click', function (e){

    //--------no btn pressed
    if(!e.target.classList.contains('btn')) return;

    //--------pressed ac
    if(e.target.classList.contains('ac')) return;

    screen.textContent = '';

    //--------pressed btn
    const value = e.target.textContent;

    //--------pressed btn 0-9
    if(digit.includes(value)) {
        if(b === '' && sing === '') {
            a += value;
            // console.log('number a', a)
            screen.textContent = a
        }
        else if (a !== '' && b !== '' && finish) {
            b = value;
            finish = false;
            screen.textContent = b
        }
        else{
            b += value;
            screen.textContent = b
            // console.log('number b', b)
        }
        return;
    }

    //--------if the pressed  +/-
    if(value === '+/-') {
        a = a * -1
        screen.textContent = a
        // console.log('+/-', a , b, sing)
        return;
    }

    //--------if the pressed  %
    if(value === '%') {
        a = a / 100;
        screen.textContent = a.toFixed(2)
        // console.log('%', sing)
        return;
    }

    //--------if the pressed  + - x /
    if(action.includes(value)) {
        sing = value;
        screen.textContent = sing;
        // console.log('sing', sing)
        return;
    }

    //--------pressed =
    if(b === '') b = a;

    if(value === '='){
        switch (sing){
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = a - b
                break;
            case 'x':
                a = a * b
                break;
            case '/':
                if(b === '0') {
                    screen.textContent = "err";
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b
                break;
        }

        finish = true;
        screen.textContent = a
    }

})



