// view.js - Handles UI and displays the time from the Model

class ClockView {

    constructor() {
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
    };

    updateTime(hours, minutes, seconds) {
        this.hoursElement.textContent = hours;
        this.minutesElement.textContent = minutes;
        this.secondsElement.textContent = seconds;
    };

};

const view = new ClockView();