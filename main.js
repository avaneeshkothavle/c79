name_of_the_student_array = [];

function submit()
{
    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;
    var name_5 = document.getElementById("name_of_the_student_5").value;
    var name_6 = document.getElementById("name_of_the_student_6").value;
    var name_7 = document.getElementById("name_of_the_student_7").value;
    var name_8 = document.getElementById("name_of_the_student_8").value;
    var name_9 = document.getElementById("name_of_the_student_9").value;
    var name_10 = document.getElementById("name_of_the_student_10").value;
    var name_11 = document.getElementById("name_of_the_student_11").value;
    var name_12 = document.getElementById("name_of_the_student_12").value;
    var name_13 = document.getElementById("name_of_the_student_13").value;
    var name_14 = document.getElementById("name_of_the_student_14").value;
    var name_15 = document.getElementById("name_of_the_student_15").value;
    var name_16 = document.getElementById("name_of_the_student_16").value;
    var name_17 = document.getElementById("name_of_the_student_17").value;
    var name_18 = document.getElementById("name_of_the_student_18").value;
    var name_19 = document.getElementById("name_of_the_student_19").value;
    var name_20 = document.getElementById("name_of_the_student_20").value;

    name_of_student_array.push(name1);
    name_of_student_array.push(name2);
    name_of_student_array.push(name3);
    name_of_student_array.push(name4);
    name_of_student_array.push(name5);
    name_of_student_array.push(name6);
    name_of_student_array.push(name7);
    name_of_student_array.push(name8);
    name_of_student_array.push(name9);
    name_of_student_array.push(name10);
    name_of_student_array.push(name11);
    name_of_student_array.push(name12);
    name_of_student_array.push(name13);
    name_of_student_array.push(name14);
    name_of_student_array.push(name15);
    name_of_student_array.push(name16);
    name_of_student_array.push(name17);
    name_of_student_array.push(name16);
    name_of_student_array.push(name18);
    name_of_student_array.push(name20);

    document.getElementById("display_name").innerHtml = name_of_the_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementsById("sort_button").style.display ="inline-block";
}

function sorting()
{    name_of_the_student_array.sort();
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
}

