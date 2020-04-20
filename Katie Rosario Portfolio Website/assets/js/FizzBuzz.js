function FizzBuzzA(value1, value2) {
    let returnValue = "";
    for (let i = 1; i <= 100; i++) {
        if (i % value1 == 0 && i % value2 == 0) {
            returnValue += '<span class="FizzBuzz">FizzBuzz </span>';
        }
        else if (i % value1 == 0) {
            returnValue += '<span class="Fizz">Fizz </span>';
        }
        else if (i % value2 == 0) {
            returnValue += '<span class="Buzz">Buzz </span>';
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

$("#showfizzbuzzBtn").on("click", function () {
    $("#fizzBuzzCode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    } else {
        $(this).text("Hide Code")
    };
});

$(function () {
    //use jquery to hide the code block
    $("#fizzBuzzCode").hide();
});

$("#btnclearFizzBuzz").on("click", function () {
    $("#FizzBuzzresults").html("");
    $("#fizzBuzzCode").hide();
});