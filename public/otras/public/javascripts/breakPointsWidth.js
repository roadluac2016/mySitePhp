
$(document).ready(function() {
    var divSkrollVar = document.querySelector("#divSkroll");
    
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 479) {
            console.log("screen width is less than 480");
             divSkrollVar.style.backgroundColor = "#0fb0d8" // Blue
        }
        else if (windowSize <= 719) {
            console.log("screen width is less than 720 but greater than or equal to 480");
             divSkrollVar.style.backgroundColor = "#ff9400" // Orange
        }
        else if (windowSize <= 959) {
            console.log("screen width is less than 960 but greater than or equal to 720");
            divSkrollVar.style.backgroundColor = "#ffe500" // Yellow
        }
        else if (windowSize >= 960) {
            console.log("screen width is greater than or equal to 960");
             divSkrollVar.style.backgroundColor = "#3fff00" //Green
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});​