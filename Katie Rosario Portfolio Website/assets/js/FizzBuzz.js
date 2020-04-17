function FizzBuzzA(value1, value2) {
    let returnValue = "";
    for (let i = 1; i <= 100; i++) {
        if (i % value1 == 0 && i % value2 == 0) {
            returnValue += '<span class="FizzBuzz">FizzBuzz </span>';
        }
        else if (i % value1 == 0) {
            returnValue += 'Fizz ';
        }
        else if (i % value2 == 0) {
            returnValue += 'Buzz ';
        }
        else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
}

//Call and use it
function buzzIt() {
    let output = "";
    let value1 = document.getElementById('Fizzvalue').value;
    let value2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzA(value1, value2);
    document.getElementById('FizzBuzzresults').innerHTML = output;
}