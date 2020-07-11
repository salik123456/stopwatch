var min=0;
var sec=0;
var msec=0;
var interval;

var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");


function timer(){

    msec++;
    msecHead.innerHTML=msec;
    if (msec>=100){
sec++;
secHead.innerHTML=sec;
msec=0;
    }
    if(sec>=60){
        min++;
        minHead.innerHTML=min;
        sec=0;

    }

}



function start(){
    interval= setInterval(timer,10);
    document.getElementById("shru").disabled=true;
    
}
function pause(){

    clearInterval(interval);
}
function reset(){
msec=0;
sec=0;
min=0;
minHead.innerHTML=min;
secHead.innerHTML=sec;
msecHead.innerHTML=msec;
pause();
}