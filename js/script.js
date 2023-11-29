const daysEl = document.querySelector('span#giorni');
const hoursEl = document.querySelector('span#ore');
const minutesEl = document.querySelector('span#minuti');
const secondsEl = document.querySelector('span#secondi');



const newYearsDate = new Date( 2024, 0, 1, 0, 0, 0, 0);
console.log(newYearsDate);

const timer = setInterval( function(){
    
    const nowDate = new Date();
    const dateDifference = newYearsDate.getTime() - nowDate.getTime();

    secondsEl.innerHTML = Math.floor((dateDifference % (60 * 1000)) / 1000);
    minutesEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    hoursEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysEl.innerHTML = Math.floor((dateDifference / (60 * 60 * 24 * 1000)));

    if ( dateDifference <= 0 ){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'HAPPY 2024!!';
    }

}, 1000);