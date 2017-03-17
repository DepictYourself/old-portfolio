window.onload = function currentYear() {
    var currentyear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = currentyear;
    console.log("function currentYear() run succesfully");
}

$(document).ready(function() {
    
    $('.slide-section').click(function(e) {
        var linkhref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkhref).offset().top
        }, 1000);
        e.preventDefault();
    });
    
});