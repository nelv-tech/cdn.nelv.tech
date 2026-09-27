const preloader = document.getElementById('wf-preloader');
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');            
        }, 500);
        setTimeout(() => {
            preloader.remove();
        }, 1000); 
    });
}