document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    let navLink = document.querySelectorAll('.nav-link');

    navLink.forEach(nav => {
        if(path === nav.getAttribute('href')) {
            nav.classList.toggle('active');
        }        
    })
})