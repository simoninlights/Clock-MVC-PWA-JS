// controller.js - Handles user input and updates Model and View

class ClockController {

    constructor(model, view) {

        this.model = model;
        this.view = view;

        this.startButton = document.getElementById('clock-btn-start');
        this.stopButton = document.getElementById('clock-btn-stop');

        this.startButton.addEventListener('click', this.handleStartClick.bind(this));
        this.stopButton.addEventListener('click', this.handleStopClick.bind(this));

    };

    handleStartClick() {
        this.model.startClock();
        this.startButton.disabled = true;
        this.stopButton.disabled = false;
    };

    handleStopClick() {
        this.model.stopClock();
        this.startButton.disabled = false;
        this.stopButton.disabled = true;
    };

    updateTime(hours, minutes, seconds) {
        this.view.updateTime(hours, minutes, seconds);
    }

};

const controller = new ClockController(model, view)