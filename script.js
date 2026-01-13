// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clases de animación
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // Formulario de contacto - Enviar por WhatsApp
    const form = document.getElementById('form-contacto');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const servicio = document.getElementById('servicio').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Mapeo de servicios
            const servicios = {
                'unas': 'Uñas',
                'peluqueria': 'Peluquería',
                'piel': 'Tratamiento de Piel'
            };
            
            // Construir mensaje de WhatsApp
            let textoWhatsApp = `Hola! Me llamo ${nombre}.\n`;
            textoWhatsApp += `Teléfono: ${telefono}\n`;
            textoWhatsApp += `Estoy interesada en: ${servicios[servicio]}\n`;
            if (mensaje) {
                textoWhatsApp += `Mensaje: ${mensaje}`;
            }
            
            // Número de WhatsApp
            const numeroWhatsApp = '5491126501037';
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
            
            // Abrir WhatsApp
            window.open(url, '_blank');
        });
    }
});

// Carrusel de servicios en home
let currentServiceSlide = 0;

function showServiceSlide(index) {
    const slides = document.querySelectorAll('.service-slide');
    const dots = document.querySelectorAll('.service-dot');
    
    if (index >= slides.length) {
        currentServiceSlide = 0;
    } else if (index < 0) {
        currentServiceSlide = slides.length - 1;
    } else {
        currentServiceSlide = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentServiceSlide].classList.add('active');
    dots[currentServiceSlide].classList.add('active');
}

function moveServiceSlide(direction) {
    showServiceSlide(currentServiceSlide + direction);
}

function goToServiceSlide(index) {
    showServiceSlide(index);
}

// Auto-play del carrusel de servicios
let serviceAutoPlay = setInterval(() => {
    moveServiceSlide(1);
}, 4000);

// Pausar auto-play al pasar el mouse
const servicesCarousel = document.querySelector('.services-carousel-container');
if (servicesCarousel) {
    servicesCarousel.addEventListener('mouseenter', () => {
        clearInterval(serviceAutoPlay);
    });

    servicesCarousel.addEventListener('mouseleave', () => {
        serviceAutoPlay = setInterval(() => {
            moveServiceSlide(1);
        }, 4000);
    });
}
