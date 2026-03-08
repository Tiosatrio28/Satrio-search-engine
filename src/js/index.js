const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('query');

function googleSearch() {
    const text = searchInput.value;
    if (text.trim() !== "") {
        
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
    }
}

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

    // Fungsi klik untuk buka/tutup
    menuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Menutup menu jika klik di luar area menu
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

    // Klik "Tentang Kami" -> Sembunyikan menu utama, munculkan submenu
    goToAbout.addEventListener('click', (e) => {
        e.preventDefault();
        mainMenu.style.display = 'none';
        aboutSubmenu.style.display = 'block';
    });

    // Klik "Kembali" -> Sembunyikan submenu, munculkan menu utama
    backToMain.addEventListener('click', (e) => {
        e.preventDefault();
        aboutSubmenu.style.display = 'none';
        mainMenu.style.display = 'block';
    });