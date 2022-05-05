function scr(){
    window.scrollTo(0,670);
}
function scr1(){
    window.scrollTo(0,0);
}
function scr2(){
    window.scrollTo(0,1340);
}
function scr3(){
    window.scrollTo(0,2010);
}
document.getElementById('u1').addEventListener('click',scr);
document.getElementById('u2').addEventListener('click',scr2);
document.getElementById('u3').addEventListener('click',scr3);
document.getElementById('u4').addEventListener('click',scr1);