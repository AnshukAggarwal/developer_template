(function(){

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li')

    function animateNavLinks(){
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation=""
            }else{
                link.style.animation =`menuLinksFade 0.5s ease forwards ${index/6+1}s`
            }
        })
    }

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        animateNavLinks();
        burger.classList.toggle('toggle');
    })


})();