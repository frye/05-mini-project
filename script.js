var timeDisplay = $('#time-display');

var displayTime = function () {
    var now = moment().format('MMM DD, YYYY [at] h:mm:ss A');
    timeDisplay.text(now);
}

setInterval(displayTime, 1000);