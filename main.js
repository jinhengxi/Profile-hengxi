'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if( window.scrollY > navbarHeight ){
        navbar.classList.add('navbar-dark');
    }else{
        navbar.classList.remove('navbar-dark')
    };
});

navbar.addEventListener('click',(e)=>{
    const target = e.target.dataset.link;
    if( target == null ){
        return;
    };
    scrollIntoView(target);
});

const contactBtn = document.querySelector('.home-contact-btn');
contactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView( {behavior : 'smooth'} );
}