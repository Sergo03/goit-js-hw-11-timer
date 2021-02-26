const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minRef = document.querySelector('[data-value="mins"]');
const secRef = document.querySelector('[data-value="secs"]');

const CountdownTimer = {
    targetDate: new Date('Jul 16, 2021'),
            
   

    interval() {
    setInterval(() => {
    const current = Date.now();
    const delta = this.targetDate - current;
    this.update(this.getTime(delta));
        }, 1000) 
    },

    getTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
    },

    update({ days,hours,mins,secs }) {
    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minRef.textContent = `${mins}`;
    secRef.textContent = `${secs}`;
   } 
  
}


console.log(CountdownTimer);




   

// const targetDate = new Date('Jul 16, 2021');




//       function getTime(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);
//         return{days,hours,mins,secs}
// } 
    


// setInterval(()=>{
//     const current = Date.now();
//     const delta = targetDate - current;
//     update(getTime(delta));
// }, 1000);

// function update({ days,hours,mins,secs }) {
//     daysRef.textContent = `${days}`;
//     hoursRef.textContent = `${hours}`;
//     minRef.textContent = `${mins}`;
//     secRef.textContent = `${secs}`;
// };
