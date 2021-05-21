const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header .container');
const menu_item = document.querySelectorAll(' .header .navbar .navlist ul li a');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
});
menu_item.forEach((item) => {
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active')
        mobile_menu.classList.toggle('active')
    });
});