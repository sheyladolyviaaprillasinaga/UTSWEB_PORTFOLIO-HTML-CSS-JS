// Mengambil elemen ikon menu dan elemen navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

// Mengatur tindakan yang akan dilakukan saat ikon menu diklik
menuIcon.onclick = () => {
    // Mengganti atau menghapus kelas 'bx-x' pada ikon menu
    menuIcon.classList.toggle('bx-x');
    // Mengganti atau menghapus kelas 'active' pada elemen navbar
    navbar.classList.toggle('active');
};

// Mengambil semua elemen "section" dan semua tautan navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Mengatur tindakan yang akan dilakukan saat halaman di-scroll
window.onscroll = () => {
    // Mengiterasi melalui semua elemen "section"
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Memeriksa apakah elemen "section" saat ini terlihat di layar
        if (top >= offset && top < offset + height) {
            // Menghapus kelas 'active' dari semua tautan navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Menambahkan kelas 'active' ke tautan navbar yang sesuai dengan elemen "section" saat ini
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Menambah atau menghapus kelas 'sticky' pada elemen header berdasarkan posisi scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Menghapus kelas 'bx-x' dari ikon menu dan menghapus kelas 'active' dari elemen navbar ketika tautan navbar di-klik (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Mengatur efek "scroll reveal" dengan konfigurasi yang berbeda pada elemen-elemen yang ditentukan
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Menginisialisasi efek "typed.js" pada elemen dengan kelas "multiple-text"
const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Fronted Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    typeDelay: 100,
    loop: true
});



