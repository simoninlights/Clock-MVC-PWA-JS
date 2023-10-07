// model.js - Timekeeping logic

class ClockModel {

    constructor() {
        this.intervalId = null;
    }

    startClock() {
        this.intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            //Pass it to view and controller
            controller.updateTime(hours, minutes, seconds);
        }, 1000);
    }

    stopClock() {
        clearInterval(this.intervalId);
    }

};

const model = new ClockModel();