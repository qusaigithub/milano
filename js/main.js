/*-------------------scroll-up---- */
    let up = document.querySelector('.up');
    window.onscroll = function(){
        up.classList.toggle('show', window.scrollY >= 100);
    }
    up.onclick = function(){
        window.scrollTo({behavior: 'smooth', top: 0});
    }
    /*------------------End-scroll-up---- */
    
    /*-----------libary-animation---- */
    AOS.init();
    /*----------End-libary-animation---- */