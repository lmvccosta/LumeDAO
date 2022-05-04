const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.menu li');
    
    //Toggle Menu
    menu.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
    });
    //Animação
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7}s';
    });
}

navSlide();

const pancakeSwap = () => {
    const button_slide = document.querySelector('.button_slide');

    //Ir para a PancakeSwap
    button_slide.addEventListener('click', () => {
        window.location.href = 'https://pancakeswap.finance/swap';
    });
}

pancakeSwap();

