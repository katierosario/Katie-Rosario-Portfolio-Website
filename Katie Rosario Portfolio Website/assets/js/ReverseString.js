

$("#tacoCat").on("click", function () {
    var str = $("#reverse").val();
    var reversedstr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedstr += str[i];
    }
    $("#reversed").html(reversedstr);

    if (str == reversedstr) {
        alert(str + " is a palidrome");
        $("#isPalindrome").prop("checked", true);
    } else {
        alert(str + " is not a palidrome");
        $("#isPalindrome").prop("checked", false);
    }


});

