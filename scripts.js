var daysCounter = document.querySelector('.days');
var hourCounter = document.querySelector('.hours');
var minuteCounter = document.querySelector('.minutes');
var secondCounter = document.querySelector('.seconds');

let days;
let hours;
let minutes;
let seconds;


console.log(seconds);
var countDown = new Date("december 31, 2023 00:00:00").getTime();

console.log(countDown);

var x = setInterval(function () {

    var now = new Date().getTime();

    var endDate = countDown - now;


    days = Math.floor(endDate / (1000 * 60 * 60 * 24));
    hours = Math.floor((endDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((endDate % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((endDate % (1000 * 60)) / (1000));

    daysCounter.innerHTML = days;
    hourCounter.innerHTML = hours;
    minuteCounter.innerHTML = minutes;
    secondCounter.innerHTML = seconds;

});