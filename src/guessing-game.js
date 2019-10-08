class GuessingGame {
    constructor() {}
    debugger;
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor(this.max/2) + Math.floor((this.min+1)/2);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess()+1;
    }
}

module.exports = GuessingGame;