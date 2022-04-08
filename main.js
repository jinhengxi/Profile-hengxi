'use strict'

const navbar = document.querySelector('#navbar');
const arrow = document.querySelector('.arrow')
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if( window.scrollY > navbarHeight ){
        navbar.classList.add('navbar-dark');
        arrow.style.display = 'block'
    }else{
        navbar.classList.remove('navbar-dark')
        arrow.style.display = 'none'
    };
});
navbar.addEventListener('click',(e)=>{
    const target = e.target.dataset.link;
    if( target == null ){
        return;
    };
    navToggle.forEach((navToggles)=>{
        navToggles.classList.remove('open')
    })
    scrollIntoView(target);
});

arrow.addEventListener('click',()=>{
    scrollIntoView('#home');
})

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



const contentContainer = document.querySelector('.work-content');
const projectContainer = document.querySelector('.work-project');
const projects = document.querySelectorAll('.work-projects');

contentContainer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter;

    const workContent = document.querySelector('.work-contents.active');
    workContent.classList.remove('active');
    e.target.classList.add('active');


    if( filter == null){
        return;
    }
    projectContainer.classList.add('opa');
    setTimeout(()=>{    
    projects.forEach((project)=>{
        if( filter === '*' || filter == project.dataset.type){
            project.style.display = 'block';
        }else{
            project.style.display = 'none';
        }
    });
        projectContainer.classList.remove('opa');
    },300)
});


const navToggle = document.querySelectorAll('.nav-menu');
const navToggleBtn = document.querySelector('.nav-toggle-btn')
navToggleBtn.addEventListener('click',()=>{

    navToggle.forEach((navToggles)=>{
        navToggles.classList.toggle('open')
    })
    // navToggle[0].classList.toggle('open');
    // navToggle[1].classList.toggle('open');
});