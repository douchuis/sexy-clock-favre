
var i = 0;  // start point
var images = [];
var time = 5000;

// image list
images[0] = 'images/girl1.jpg';
images[1] = 'images/girl2.jpg';
images[2] = 'images/girl3.jpg';
images[3] = 'images/girl4.jpg';
images[4] = 'images/girl5.jpg';



// change image
function changeImg() {
    document.slide.src = images[i];
    if(i < images.length -1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

// window.onload = changeImg;


function realtimeClock() {
    var rtClock = new Date();

    var hour = rtClock.getHours();
    var minute = rtClock.getMinutes();
    var seconde = rtClock.getSeconds();

    var amPm = (hour < 12) ? "AM" : "PM";
    hour = (hour > 12) ? hour -12 : hour;

    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    seconde = ("0" + seconde).slice(-2);

    document.getElementById('clock').innerHTML=
        hour + " : " + minute + " : " + seconde + " " + amPm ;
    var t = setTimeout(realtimeClock, 500);

}function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour <12) {
        greeting.textContent = 'Good Morning Nicolas';
    }else if ((hour > 12) && (hour<18)){
        greeting.textContent = "Good Afternoon Nicolas";
    }else if((hour > 22) && (hour < 24)){
        greeting.textContent = "Time for bed, Right ?";
    }else {
        greeting.textContent = "Good Evening Nicolas";
    }
    greeting = document.getElementById('greeting');
}

function start() {
    realtimeClock();
    changeImg();
    setBgGreet();

}

