function findSum(numbers, answer) {


    let checkValue = 0;
    let found = false;
    //startIndex = 0, end Index =3
    for (let i = 0; i <= numbers.length - 2; i++) {
        ///Loop over the array in the after the current value
        for (let y = (i + 1); y <= numbers.length - 1; y++) {
            if (answer == numbers[i] + numbers[y]) {
                found = true;
                return found;

            }
        }


    }
    return found;
}

function displaySum() {
    let answer = document.getElementById("findSum").value;
    let numArray = [10, 15, 3, 7];

    document.getElementById("numList").innerHTML = numArray.toString();
    let found = findSum(numArray, answer);
    document.getElementById("results").innerHTML = found.toString();

}