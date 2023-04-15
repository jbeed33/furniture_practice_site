let mobile_menu = document.querySelector('#mobile_menu');
let mobile_menu_nav_bar = document.querySelector('#nav-bar-container');
let mobile_menu_close = document.querySelector('#close_mobile_menu_btn');

mobile_menu.addEventListener('click', () =>{
    if(mobile_menu_nav_bar.classList.contains('hidden') ){
        mobile_menu_nav_bar.classList.toggle('hidden');
    }
});

mobile_menu_close.addEventListener('click', () =>{
    if(!mobile_menu_nav_bar.classList.contains('hidden') ){
        mobile_menu_nav_bar.classList.toggle('hidden');
    }
})