
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener("click", e => { 
    timeoutId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor();
        btnStart.disabled = true;
        btnStop.disabled = false;
        
    },1000)
});

btnStop.addEventListener('click', e => { 
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(timeoutId);
});

