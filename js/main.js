let menuBtn = document.getElementById('menu-btn');
let menu = document.querySelector('.navbar__menu');
console.log(menuBtn);

let flag = false;

function showHideMenu(){
    if(!flag){
        menu.style.left ='0';
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-xmark');
        flag = true;
    }else{
        menu.style.left ='-200px';
        menuBtn.classList.remove('fa-xmark');
        menuBtn.classList.add('fa-bars');
        flag=false;
    }
}


