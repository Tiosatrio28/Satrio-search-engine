searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    googleSearch();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        googleSearch();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('menu-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');

    
    menuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

   
    window.addEventListener('click', (e) => {
        if (!menuTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

const mainMenu = document.getElementById('main-menu');
    const aboutSubmenu = document.getElementById('about-submenu');
    const goToAbout = document.getElementById('go-to-about');
    const backToMain = document.getElementById('back-to-main');

    
    goToAbout.addEventListener('click', (e) => {
        e.preventDefault();
        mainMenu.style.display = 'none';
        aboutSubmenu.style.display = 'block';
    });


    backToMain.addEventListener('click', (e) => {
        e.preventDefault();
        aboutSubmenu.style.display = 'none';
        mainMenu.style.display = 'block';
    });