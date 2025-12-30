 // Set the date we're counting down to
const targetDate = new Date("Jan 30, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers to always show two digits (e.g., 05 instead of 5)
    const format = (num) => num < 10 ? "0" + num : num;

    document.getElementById("timer").innerHTML = 
        `${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`;

    // If countdown is finished
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "WE ARE LIVE!";
    }
}, 1000);