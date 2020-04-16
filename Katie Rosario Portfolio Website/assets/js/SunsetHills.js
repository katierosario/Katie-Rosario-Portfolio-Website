<script>


$("#sunonbuildings").on("click", function () {

    let myArray = new Array();
    myArray.push(Number($("#building1").val()));
    myArray.push(Number($("#building2").val()));
    myArray.push(Number($("#building3").val()));
    myArray.push(Number($("#building4").val()));
    myArray.push(Number($("#building5").val()));
    myArray.push(Number($("#building6").val()));

    let tallest = myArray[0]

    let newArray = new Array();
    newArray.push(tallest);
    for (var index = 1; index < myArray.length; index++) {
        if (myArray[index] > tallest) {
            tallest = myArray[index];
            newArray.push(tallest);

        }

    }

    $("#hillsOutput").html(`The buildings that can see the sunset are ${newArray.join(", ")}`);
    });

    $("#clearHills").on("click", function () {
        $('#hillsInput1, ").val("");
        $("#hillsOutput").text("");

    });

    $('#btnShowHillscode").on("click", function (){


    }
</script>