ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500, 
    delay:400
});

ScrollReveal().reveal('.logo,img', { delay: 500, origin:'left' });
ScrollReveal().reveal('.section-1,.contains', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('h1,h3,p', { delay: 700, origin:'left', interval:200 });