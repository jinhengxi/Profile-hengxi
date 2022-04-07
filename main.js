'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar-dark');
    }else{
        navbar.classList.remove('navbar-dark');
    }
})


const navbarMenu = document.querySelector('.nav-menu')
navbarMenu.addEventListener('click',(e)=>{
    const target = e.target;
    const link = target.dataset.link;
    if( link == null ){
        return;
    }
    console.log(e.target.dataset.link)
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior : 'smooth' });
})