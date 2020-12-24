const refs = {
    days: document.querySelector('span[data-value="days"]'),   //получаю элемент тега days
    hours: document.querySelector('span[data-value="hours"]'),   //получаю элемент тега hours
    mins: document.querySelector('span[data-value="mins"]'),   //получаю элемент тега mins
    secs: document.querySelector('span[data-value="secs"]'),    //получаю элемент тега secs
    timerFace: document.getElementById("timer-1"),
};

  class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
  
    setInt = setInterval(() => {
      const nowDate = Date.now();
      const time = this.targetDate - nowDate;
      this.updateClockface(time);
    }, 1000);
  
    updateClockface(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.mins.textContent = `${mins}`;
      refs.secs.textContent = `${secs}`;
    }
  
    pad(value) {
      return String(value).padStart(2, "0");
    }
    timeFinish(time) {
      if (time < 0) {
        clearInterval(this.setInt);
        refs.timerFace.textContent = "Finish";
      }
    }
  };
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Feb 17, 2021"),
  });

