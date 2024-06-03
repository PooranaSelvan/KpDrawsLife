// Dark Mode 
function darkMode(){
    document.getElementById('bdy').classList.toggle('dm');
}


// ===========================================================================

// Image Changing
var i=0;
var kpa=new Array();
kpa[0]="./img/pic1.jpg"
kpa[1]="./img/pic2.jpg"
kpa[2]="./img/pic3.jpg"
kpa[3]="./img/pic4.jpg"
kpa[4]="./img/pic5.jpg"
kpa[5]="./img/pic6.jpg"
kpa[6]="./img/pic7.jpg"
kpa[7]="./img/pic8.jpg"
kpa[8]="./img/pic9.jpg"
kpa[9]="./img/pic10.jpg"
kpa[10]="./img/pic11.jpg"
kpa[11]="./img/pic12.jpg"
kpa[12]="./img/pic13.jpg"
kpa[13]="./img/pic14.jpg"
kpa[14]="./img/pic15.jpg"
function kp1(){
    document.img1.src=kpa[i];
    if(i<kpa.length-1)
        i++;
    else
        i=0;
    setTimeout("kp1()",3000);
}
window.onload=kp1;

// ==========================================================================

// // Dev Tools Hidding

document.addEventListener('contextmenu',
function(event){
    event.preventDefault();
});

// ===============================================================================

// ----------------------------------------------- Nav Bar Event
const menu = document.getElementsByClassName('menu')[0];
const menuList = document.getElementsByClassName('navbar')[0].querySelector('.nav-ul');
menu.addEventListener('click',()=>
{
    menuList.classList.toggle('showmenu')
});

// ============================================================================