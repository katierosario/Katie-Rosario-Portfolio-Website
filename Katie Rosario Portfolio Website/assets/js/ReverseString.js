

$("#tacoCat").on("click", function () {
    var str = $("#reverse").val();
    var reversedstr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedstr += str[i];
    }
    $("#reversed").html(reversedstr);

    if (str == reversedstr) {
        swal({
            title: "Yay!",
            text: `${str} is a palindrome!`,
            icon: "success",
        });
    } else {
        swal({
            title: "Nope!",
            text: `${str} is a not palindrome.`,
            icon: "error"
        });
    }

});

