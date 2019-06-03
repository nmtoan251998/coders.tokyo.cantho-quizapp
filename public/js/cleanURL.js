document.addEventListener("DOMContentLoaded", () => {    
    history.pushState(window.location.href, null, `${window.location.origin}${window.location.pathname}`)
})