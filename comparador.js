// Slider interactivo para comparación Antes/Después
document.addEventListener('DOMContentLoaded', function() {
    const comparadores = document.querySelectorAll('.comparador-antes-despues');
    
    comparadores.forEach(comparador => {
        const slider = comparador.querySelector('.slider-comparador');
        const imagenDespues = comparador.querySelector('.imagen-despues');
        
        if (!slider || !imagenDespues) return;
        
        let isDragging = false;
        
        // Función para actualizar la posición del slider
        function updateSlider(e) {
            if (!isDragging && e.type !== 'click') return;
            
            const rect = comparador.getBoundingClientRect();
            let x;
            
            // Detectar si es touch o mouse
            if (e.type.includes('touch')) {
                x = e.touches[0].clientX - rect.left;
            } else {
                x = e.clientX - rect.left;
            }
            
            // Calcular porcentaje
            let porcentaje = (x / rect.width) * 100;
            
            // Limitar entre 0 y 100
            porcentaje = Math.max(0, Math.min(100, porcentaje));
            
            // Actualizar posición del slider y ancho de imagen después
            slider.style.left = porcentaje + '%';
            imagenDespues.style.width = porcentaje + '%';
        }
        
        // Mouse events
        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateSlider(e);
        });
        
        document.addEventListener('mousemove', updateSlider);
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // Touch events para móviles
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            updateSlider(e);
        });
        
        comparador.addEventListener('touchmove', (e) => {
            e.preventDefault();
            updateSlider(e);
        });
        
        document.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Permitir click directo en la imagen para mover el slider
        comparador.addEventListener('click', updateSlider);
    });
});

// Carrusel de comparadores
let currentComparadorSlide = 0;

function showComparadorSlide(index) {
    const slides = document.querySelectorAll('.comparador-slide');
    const dots = document.querySelectorAll('.comparador-dot');
    
    if (!slides.length) return;
    
    if (index >= slides.length) {
        currentComparadorSlide = 0;
    } else if (index < 0) {
        currentComparadorSlide = slides.length - 1;
    } else {
        currentComparadorSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentComparadorSlide) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentComparadorSlide) {
            dot.classList.add('active');
        }
    });
}

function moveComparadorSlide(direction) {
    showComparadorSlide(currentComparadorSlide + direction);
}

function goToComparadorSlide(index) {
    showComparadorSlide(index);
}

// Auto-play (opcional, descomentá si querés que avance solo)
// setInterval(() => {
//     moveComparadorSlide(1);
// }, 5000);
