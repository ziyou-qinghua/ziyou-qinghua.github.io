function updateCountdown(targetDate) {
    var now = new Date();
    var timeLeft = targetDate - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = days;
    setTimeout(updateCountdown, 1000);
}