
function DoSOAF(arrHeights) {
    var arrResult = new Array();

$("#btnSumFears").on("click", function () {
    let k = Number($("#k").val());

    let myArray = new Array();
    myArray.push(Number($("#soafInput1").val()));
    myArray.push(Number($("#soafInput2").val()));
    myArray.push(Number($("#soafInput3").val()));
    myArray.push(Number($("#soafInput4").val()));
    myArray.push(Number($("#soafInput5").val()));

    //k = 14
    //15 6 8 9 4

    let target = 0;
    let found = false;

    //loop over each item in the array 1 at a time
    for (var index = 0; index < myArray.length; {
        //Determine what number you need to solve for the given K...
        //find k - myArray[index]
        target = k - myArray[index];

        //arr.indexOf(searchElement[, fromIndex])
        //if (myArray.indexOf(target, index + 1) > 0) {
        if(myArray.indexOf(target, index + 1) >= 0) {
        found = true;
        break;
    }
}

    if (found)
    $("#results").html(`A K value of ${k} was found in the array`);
    else
    $("#results").html(`A K value of ${k} was NOT found in the array`);

});

    return arrResult;
}






//function findSum(numbers, answer) {

//    //Loop through the array and add the adjacent number and check for answer
//    let checkValue = 0;
//    let found = false;
//    //startIndex = 0, end Index =3
//    for (let i = 0; i <= numbers.length - 2; i++) {
//        ///Loop over the array in the after the current value
//        for (let y = (i + 1); y <= numbers.length - 1; y++) {
//            if (answer == numbers[i] + numbers[y]) {
//                found = true;
//                return found;

//            }
//        }

//    }
//    return found;
//}

//function DisplayAllSums() {
//    let answer = document.getElementById("sumValue").value;
//    //let numArray = [10, 15, 3, 7, 2, 16];

//    let numArray = GenerateNumbers(20);

//    //Show the array on the screen
//    document.getElementById("numList").innerHTML = numArray.toString();
//    let found = FindSumD(numArray, answer).join("<br>");
//    document.getElementById("results").innerHTML = found.toString();
//}

