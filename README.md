# ✨ ambarsquintana.github.io

![GitHub Pages](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Portafolio profesional de **Ambar Quintana**, Business Intelligence Engineer especializada en el stack de datos de Microsoft.

> 🌐 **Sitio web:** [ambarsquintana.github.io](https://ambarsquintana.github.io)

Sitio estático (*HTML + CSS + JS puro*, sin paso de compilación) desarrollado e iterado con asistencia de IA generativa (Claude) y publicado en **GitHub Pages**.

---

## ⚙️ Estructura del proyecto

```text
├── index.html                      # Página principal con todas las secciones
├── proyectos/
│   └── accidentes-carreteras.html  # Página de detalle de cada proyecto
├── assets/
│   ├── css/
│   │   ├── styles.css              # Estilos globales, variables (modo claro/oscuro), layout y responsive
│   │   └── proyecto.css            # Estilos propios de las páginas de proyecto
│   ├── js/
│   │   └── script.js               # Tema, menú móvil, scroll suave, scroll-spy, videos de tarjetas,
│   │                               # copiar correo y botón "Volver arriba"
│   └── img/
│       ├── perfil.jpg              # Foto de perfil (también se usa al compartir el enlace)
│       ├── icono.png               # Logo y favicon
│       ├── fondo.svg               # Fondo decorativo del perfil
│       ├── icons/                  # Íconos de Habilidades y logos de Certificaciones
│       ├── proyectos/              # Imagen de los proyectos en construcción
│       └── accidentes-carreteras/  # Tarjeta, video y diagrama del proyecto
└── README.md
```

---

## 📍 Secciones del sitio

* **Perfil (`#perfil`):** foto, presentación, métricas de impacto y accesos a contacto, proyectos y redes.
* **Sobre mí (`#sobre-mi`):** enfoque de trabajo y trayectoria personal.
* **Proyectos (`#portafolio`):** galería de tarjetas; cada proyecto publicado tiene su propia página en `proyectos/` con dashboard, caso de negocio, arquitectura, modelo de datos, decisiones técnicas y hallazgos.
* **Experiencia (`#experiencia`):** trayectoria profesional con fechas, industria y logros.
* **Habilidades (`#habilidades`):** herramientas y tecnologías del stack técnico.
* **Certificaciones (`#certificaciones`):** credenciales con enlace a su verificación.
* **Contacto (`#contacto`):** el footer funciona como sección de contacto, con correo, LinkedIn y GitHub.

---

## 👩🏻‍💻 Notas técnicas

* **Íconos:** los de la interfaz vienen de **Lucide Icons** (CDN) y se inicializan con `lucide.createIcons()`. Los de Habilidades y Certificaciones son archivos locales en `assets/img/icons/`.
* **Tipografía:** **Inter**, desde Google Fonts.
* **Tema claro/oscuro:** respeta la preferencia del sistema y guarda la elección del usuario.
* **Sin compilación:** no requiere `npm` ni empaquetadores. Para probarlo localmente basta con abrir `index.html` o usar la extensión *Live Server* de VS Code.
* **Scroll preciso:** el scroll suave compensa la altura del encabezado fijo para que las secciones no queden tapadas.

---

## 📩 Contacto

* **LinkedIn:** [linkedin.com/in/ambarsquintana](https://www.linkedin.com/in/ambarsquintana/)
* **GitHub:** [github.com/ambarsquintana](https://github.com/ambarsquintana)
* **Sitio web:** [ambarsquintana.github.io/#contacto](https://ambarsquintana.github.io/#contacto)
