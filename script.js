// Countdown Function
const countdown = () => {
    const countDate = new Date("Jan 24, 2025 18:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days-text").innerText = days;
    document.getElementById("hours-text").innerText = hours;
    document.getElementById("minutes-text").innerText = minutes;
    document.getElementById("seconds-text").innerText = seconds;
};

setInterval(countdown, 1000);

// Particles.js Configuration
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 1000,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFD700"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#FFD700"
            }
        },
        "opacity": {
            "value": 0.4,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out"
        }
    },
    "retina_detect": true
});
