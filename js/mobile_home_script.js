let mobile_menu = document.querySelector('#mobile_menu');
let mobile_menu_nav_bar = document.querySelector('#nav-bar-container');
let mobile_menu_close = document.querySelector('#close_mobile_menu_btn');

const animatedOnScrollElements = [];
animatedOnScrollElements.push(document.querySelector('#about-info-container'))
animatedOnScrollElements.push(document.querySelector('#scrollable-feature-info-container'))

console.log(animatedOnScrollElements);

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(!entry.target.classList.contains('show')){
            if(entry.isIntersecting) entry.target.classList.add('show');
          
        }
       
    })
},
{
    threshold: 1
} 
);

animatedOnScrollElements.forEach(el =>{
    observer.observe(el);
})

mobile_menu.addEventListener('click', () =>{

    // only used in the intial loading state
    if(mobile_menu_nav_bar.classList.contains('initial') ){
        mobile_menu_nav_bar.classList.remove('initial');
        mobile_menu_nav_bar.classList.toggle('hidden');
    }

    if(mobile_menu_nav_bar.classList.contains('hidden') ){
        mobile_menu_nav_bar.classList.toggle('hidden');
    }
});

mobile_menu_close.addEventListener('click', () =>{
    if(!mobile_menu_nav_bar.classList.contains('hidden') ){
        mobile_menu_nav_bar.classList.toggle('hidden');
    }
})