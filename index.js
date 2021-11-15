let time = document.getElementById('time');
let heartR = document.getElementById('heart-rate-sec');
let purple = document.getElementById('purple');
let pink = document.getElementById('pink');
let black = document.getElementById('black');
let orange = document.getElementById('orange');
let skin = document.getElementById('skin');
let watch = document.getElementById('watch-pic');
let heartR1 = document.getElementById('heart-rate-sec2');

// button Selection
let timeBtn = document.querySelector(".time");

let heartBtn = document.querySelector(".heart-rate");
let stopBtn = document.querySelector(".display-none");

purple.addEventListener('click', function(){
  document.getElementById('watch-pic').src = './Mplj1YR.png';
})
pink.addEventListener('click', function(){
  document.getElementById('watch-pic').src = './xSIK4M8.png';
})
black.addEventListener('click', function(){
  document.getElementById('watch-pic').src = './iOeUBV7.png';
})
orange.addEventListener('click', function(){
  document.getElementById('watch-pic').src = './PTgQlim.png';
})
skin.addEventListener('click', function(){
  document.getElementById('watch-pic').src = './Zygu7I3.png';
})

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("time").textContent = time; 
  let t = setTimeout(function(){ currentTime() }, 100);
}


timeBtn.addEventListener('click', function(){
  time.textContent = currentTime();
  time.style.display = 'block';
  heartR.style.display = 'none';
  heartR1.style.display = 'none';
  document.getElementById('loader').style.display = 'none';
})


heartBtn.addEventListener('click', function(){
  heartR.src = './heart-attack.png';
  heartR.style.display = 'block';
  heartR1.textContent = 78;
  heartR1.style.display = 'block';
  time.style.display = 'none';
  document.getElementById('loader').style.display = 'none';
})

stopBtn.addEventListener('click', function(){
  heartR.style.display= 'none';
  time.style.display = 'none';
  heartR1.textContent = '';
  document.getElementById('loader').style.display = 'block';
})

//For Popup==>

const box = document.getElementById('modal1')
const openModalButtons = document.getElementById('trigger1')
const closeModalButtons = document.getElementById('close')
const overlay = document.getElementById('overlay')

openModalButtons.addEventListener('click', function(){
  box.classList = "modal1 active"
  overlay.classList = "overlay active"
})

document.getElementById('close').addEventListener('click', function(){
  box.classList.remove('active')
  overlay.classList.remove('active')
})