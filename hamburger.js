
const hammenu = document.querySelector('.ham-menu');

const offscreenMenu = document.queryselector('.off-screen-menu');

 hammenu.addEventListener('click', () => {
    hammenu.classlist.toggle('active');
    offscreenMenu.classlist.toggle('active')
})    

