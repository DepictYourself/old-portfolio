window.onload = function currentYear () {
    var currentyear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = currentyear;
    console.log("function currentYear() run succesfully");
}