var clock = document.getElementById("clock");

// Clock Calculations
// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Time calculations for minutes and seconds
    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 2; //IDK why but offset is 2 hours
    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result, account for single digit hours and minutes
    if(hours < 10 && minutes < 10){
        clock.innerHTML = "0" + hours + " : 0"+ minutes;
    } else if(hours < 10 && minutes > 9){
        clock.innerHTML = "0" + hours + " : "+ minutes;
    } else if(hours > 9 && minutes < 10){
        clock.innerHTML = hours + " : 0"+ minutes;
    } else {
        clock.innerHTML = hours + " : "+ minutes;
    }

}, 1000);


