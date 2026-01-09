# Estetica Las Chicas - Página Web

## 📁 Estructura del Proyecto

```
Pagina/
├── index.html              # Página principal
├── sobre-nosotros.html     # Página sobre nosotros
├── unas.html              # Galería de uñas
├── peluqueria.html        # Galería de peluquería
├── piel.html              # Galería de tratamientos de piel
├── styles.css             # Estilos principales
├── carousel.css           # Estilos para carruseles y galerías
├── sobre.css              # Estilos para página sobre nosotros
├── script.js              # JavaScript principal
├── carousel.js            # JavaScript para carruseles
└── images/
    ├── logo/              # Logo del negocio
    ├── icons/             # Iconos de servicios
    └── gallery/
        ├── unas/          # Fotos de trabajos de uñas
        ├── peluqueria/    # Fotos de trabajos de peluquería
        └── piel/          # Fotos de tratamientos de piel
```

## 🎨 Características Implementadas

✅ **Página Principal:**
- Banner hero con logo y nombre
- Barra superior fija con redes sociales
- Banner de promociones
- 3 secciones de servicios (Uñas, Peluquería, Piel)
- Lista de precios
- Testimonios de clientas
- Información de contacto y horarios
- Formulario de reserva de turnos
- Mapa de Google Maps
- Feed de Instagram
- Botón flotante de WhatsApp

✅ **Páginas de Galerías:**
- Carruseles de fotos
- Sección Antes/Después
- Navegación con flechas y teclado
- Auto-play pausable

✅ **Página Sobre Nosotros:**
- Historia del negocio
- Valores
- Presentación del equipo

## 📝 Configuración Necesaria

### 1. Reemplazar Imágenes

#### Logo Principal:
Guardá tu logo en `images/logo/logo.png` y actualizá en `index.html` línea ~15:
```html
<div class="logo-placeholder">LOGO</div>
```
Por:
```html
<img src="images/logo/logo.png" alt="Estetica Las Chicas Logo" style="width: 150px; height: auto;">
```

#### Iconos de Servicios:
Guardá tus iconos en `images/icons/` y actualizá en `index.html`:
- Línea ~58: Icono de uñas
- Línea ~70: Icono de peluquería
- Línea ~82: Icono de piel

Reemplazá el `<svg>` completo por:
```html
<img src="images/icons/unas.png" alt="Uñas" style="width: 80px; height: 80px;">
```

#### Fotos de Carruseles:
Reemplazá los placeholders en `unas.html`, `peluqueria.html` y `piel.html`:
```html
<div class="placeholder-image">
    <span>Foto 1</span>
</div>
```
Por:
```html
<img src="images/gallery/unas/foto1.jpg" alt="Descripción" style="width: 100%; height: 400px; object-fit: cover; border-radius: 10px;">
```

#### Fotos Antes/Después:
Similar al carrusel, reemplazá en las secciones de antes/después.

### 2. Configurar Redes Sociales

Actualizá los links en todas las páginas HTML:
- Facebook: línea ~12
- Instagram: línea ~17
- WhatsApp: línea ~22 y botón flotante

### 3. Actualizar Número de WhatsApp

Buscá y reemplazá `5491123456789` por tu número real con código de país (sin +, espacios ni guiones).

### 4. Configurar Google Maps

En `index.html`, línea ~210, reemplazá el `src` del iframe con tu dirección:
1. Andá a [Google Maps](https://www.google.com/maps)
2. Buscá tu dirección
3. Click en "Compartir" → "Insertar un mapa"
4. Copiá el código y reemplazá el `src`

### 5. Instagram Feed (Opcional)

Para conectar tu feed real de Instagram, podés usar servicios como:
- SnapWidget
- Behold
- Instagram Basic Display API

O simplemente reemplazá los placeholders por imágenes estáticas de tus publicaciones.

### 6. Actualizar Información

- **Precios:** `index.html` líneas ~95-125
- **Horarios:** `index.html` línea ~160
- **Dirección:** `index.html` línea ~155
- **Email:** `index.html` línea ~165
- **Testimonios:** `index.html` líneas ~135-145
- **Info del equipo:** `sobre-nosotros.html` líneas ~80-120

## 🚀 Cómo Abrir la Página

1. **Opción 1 - Live Server (Recomendado):**
   - Click derecho en `index.html`
   - "Open with Live Server"

2. **Opción 2 - Navegador:**
   - Doble click en `index.html`

3. **Opción 3 - Terminal:**
   ```bash
   xdg-open index.html
   ```

## 📱 Responsive

La página está completamente optimizada para:
- Desktop
- Tablet
- Móviles

## 🎯 Próximos Pasos Sugeridos

1. Agregar tus imágenes reales
2. Actualizar todos los textos con información real
3. Conectar el formulario a un servicio de email (opcional)
4. Optimizar imágenes para web (comprimir para carga rápida)
5. Registrar un dominio y hosting
6. Configurar SSL (HTTPS)

## 💡 Tips

- Las imágenes deben estar optimizadas (usar herramientas como TinyPNG)
- Formato recomendado: JPG para fotos, PNG para logos con transparencia
- Tamaño recomendado: máximo 500KB por imagen
- Dimensiones recomendadas para carrusel: 800x600px

## 📞 Soporte

Si necesitás ayuda con alguna configuración, consultame!

---

**¡Tu página web está lista para brillar! 💅✨**
# EsteticaLasChicas
