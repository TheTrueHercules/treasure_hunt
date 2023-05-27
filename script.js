// Set the date we're counting down to
var countDownDate = new Date("June 15, 2023 00:00:00").getTime();

// Update the count down every 1 nanosecond
var countdownfunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((distance % 1000) / 1);
    var nanoseconds = Math.floor((distance % 1) * 1000000);

    // Add leading zeros
    if(milliseconds < 10) {
        milliseconds = "00" + milliseconds;
    } else if(milliseconds < 100) {
        milliseconds = "0" + milliseconds;
    }

    // Display the result
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + milliseconds + "ms " + nanoseconds + "ns ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 0);
