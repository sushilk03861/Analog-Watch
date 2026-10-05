let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function displayTime(){

    let date = new Date(); // current time deta hai ye javascript ki properties hai
      
    // Getting hours , mins , secs from date

    let hh = date.getHours();  // 0 se 23 
    let mm = date.getMinutes(); // 0 se 59
    let ss = date.getSeconds(); // 0 se 59

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime,1000);