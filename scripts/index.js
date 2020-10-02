const span_hr = document.getElementById('span_hrs');
const span_mnt = document.getElementById('span_mnt');
const span_sec = document.getElementById('span_sec');
const span_date = document.getElementById('current_date');

const date_time = new Date();

span_date.innerHTML = `${date_time.getDate()}/${date_time.getMonth()}/${date_time.getFullYear()}`;

const setTime = () => {
    const _time = new Date();
    let hour = _time.getHours();
    let min = _time.getMinutes();
    let sec = _time.getSeconds();
   // let millisecond = _time.getMilliseconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    span_hr.innerHTML = hour+` : `;
    span_mnt.innerHTML = min+` : `+sec;
   // span_sec.innerText =" : "+millisecond;
   
    let t = setTimeout(function(){ setTime() },0); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

setTime();

window.onload = () =>{
  let timeout = setTimeout(() => {
    let ifr = document.getElementsByTagName('iframe')[0].src = "https://docs.google.com/forms/d/e/1FAIpQLSfVpTzIG22PqBEvEmzLZS57ljQpFkR-Szs9_j1D5GIpDx0nBQ/formResponse?usp=pp_url&entry.997995038=3&submit=Submit"
  }, 5000)
  console.log("count")
}