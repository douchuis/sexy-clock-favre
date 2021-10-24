
var i = 0;  // start point
var images = [];
var time = 5000;

// image list
images[0] = 'images/1.jpg';
images[1] = 'images/2.jpg';
images[2] = 'images/3.jpg';
images[3] = 'images/4.jpg';
images[4] = 'images/5.jpg';
images[5] = 'images/6.jpg';
images[6] = 'images/7.jpg';
images[7] = 'images/8.jpg';
images[8] = 'images/9.jpg';
images[9] = 'images/10.jpg';



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
        greeting.textContent = 'Good Morning Julien';
    }else if ((hour > 12) && (hour<18)){
        greeting.textContent = "Good Afternoon Julien";
    }else if((hour > 22) && (hour < 24)){
        greeting.textContent = "Time for bed, Right ?";
    }else {
        greeting.textContent = "Good Evening Julien";
    }
    greeting = document.getElementById('greeting');
}

function start() {
    realtimeClock();
    changeImg();
    setBgGreet();

}

