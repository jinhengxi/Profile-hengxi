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



const home = document.querySelector('.home-title');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})



const hello = document.querySelector('.hello');

function selectArr(){
    const string = "Hello, I'm Hengxi"
    const stringArr = string.split('')
    console.log(stringArr)
    return stringArr;
}

function resetHello(){
    hello.textContent = '';
    dynamic(selectArr());
}

function dynamic(Arr){
    if( Arr.length > 0 ){
        hello.textContent += Arr.shift()
        setTimeout(()=>{
            dynamic(Arr)
        },80)
    }else{
        setTimeout(()=>{
            resetHello()
        },2000)
    }
}
dynamic(selectArr())

// setInterval(()=>{
//     hello.classList.toggle('active')
// },300)