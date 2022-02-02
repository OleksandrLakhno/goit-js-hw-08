import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');


btnStart.disabled = true;
let date = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      date = selectedDates[0];
    if (date <= options.defaultDate) {
            alert('Please choose a date in the future');
    }else
    btnStart.disabled = false;
  },
};
flatpickr('#datetime-picker', options);

        function timer() {
            setInterval(() => {
            const ms = date.getTime() - new Date().getTime();
            daysEl.textContent = convertMs(ms).days;
            hoursEl.textContent = convertMs(ms).hours;
            minEl.textContent = convertMs(ms).minutes;
            secEl.textContent = convertMs(ms).seconds;
        }, 1000);
        }
        
 
btnStart.addEventListener('click',timer);

function pad(value) {
    return String(value).padStart(2,'0');   
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

