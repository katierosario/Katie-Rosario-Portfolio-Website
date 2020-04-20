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



$("#showBtnsum").on("click", function () {
    $("#sumCode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    } else {
        $(this).text("Hide Code")
    };
});


$(function () {
    //use jquery to hide the code block
    $("#sumCode").hide();
});

//if ("findSum" == true) {
//    swal({
//        title: "Yay the number you entered for K has numbers that add up to K!",
//        icon: "success",
//    });
//} else {
//    swal({
//        title: "Sorry, no numbers add up to the value of K, try again?",
//        icon: "error"
//    });
//}