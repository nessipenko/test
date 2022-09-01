"use strict";


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
          btn = body.querySelector('.collapsible__button'),
          btnHide = btn.querySelector('.collapsible__action--visible'),
          btnShow = btn.querySelector('.collapsible__action--hidden'),
          content = body.querySelector('.collapsible__content');

    btnHide.style.display = "none";
    btnShow.style.display = "block";
    content.style.display = 'none';
    
    let collapse;

    btn.addEventListener('click', () => {
        content.style.display = getComputedStyle(content).display == 'block' ? 'none' : 'block';
        if(getComputedStyle(content).display == 'block') {
            btnShow.style.display = 'none';
            btnHide.style.display = 'block';
            collapse = content.animate(
                { width: ['0px', '1960px'] },
                { duration: 1550, fill: 'both', easing: "ease-out" 

            });
        } else {
            btnHide.style.display = 'none';
            btnShow.style.display = 'block';
        }
    });
});
