let mobile_menu = document.querySelector('#mobile_menu');
let mobile_menu_nav_bar = document.querySelector('#nav-bar-container');
let mobile_menu_close = document.querySelector('#close_mobile_menu_btn');
let mobile_menu_overlay = document.querySelector('#overlay');

const animatedOnScrollElements = [];
animatedOnScrollElements.push(document.querySelector('#about-info-container'))
animatedOnScrollElements.push(document.querySelector('#scrollable-feature-info-container'))

console.log(animatedOnScrollElements);

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(!entry.target.classList.contains('show')){
            if(entry.isIntersecting) entry.target.classList.remove('hidden');
            if(entry.isIntersecting) entry.target.classList.add('show');
        }
       
    })
},
{
    threshold: 0.5
} 
);

animatedOnScrollElements.forEach(el =>{
    observer.observe(el);
})

mobile_menu.addEventListener('click', () =>{

    // only used in the intial loading state
    if(mobile_menu_nav_bar.classList.contains('initial') ){
        mobile_menu_nav_bar.classList.remove('initial');
        mobile_menu_overlay.classList.remove('hidden');
    }
    else if(mobile_menu_nav_bar.classList.contains('hidden') ){
        mobile_menu_nav_bar.classList.toggle('hidden');
        mobile_menu_overlay.classList.toggle('hidden');
    }

});

mobile_menu_close.addEventListener('click', () =>{
        mobile_menu_nav_bar.classList.toggle('hidden');
        mobile_menu_overlay.classList.toggle('hidden');
})