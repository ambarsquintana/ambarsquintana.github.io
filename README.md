# ✨ ambarsquintana.github.io

![GitHub Pages](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Portafolio profesional de **Ambar Quintana** — Business Intelligence Developer especializada en el Stack de datos de Microsoft.

> 🌐 **Sitio Web en Vivo:** [ambarsquintana.github.io](https://ambarsquintana.github.io)

Sitio web estático (*HTML + CSS + JS puro*, sin paso de compilación ni dependencias externas pesadas) desarrollado e iterado con asistencia de IA Generativa (Claude) para su despliegue directo en **GitHub Pages**.

---

## ⚙️ Estructura del Proyecto

```text
├── index.html                           # Estructura principal y contenido de todas las secciones
├── css/
│   └── styles.css                       # Estilos globales, variables CSS (Modo Claro/Oscuro), layout y responsive
├── js/
│   └── script.js                        # Lógica de UI: theme toggler, menú móvil, smooth scroll con offset,
│                                        # filtro de proyectos por categoría, scroll-spy y botón "Volver arriba"
├── img/
│   ├── fondo.svg                        # Fondo decorativo de la sección Perfil (tema claro)
│   ├── perfil.png                       # Fotografía de perfil principal
│   ├── proyecto_01.png ...              # Capturas de pantalla de los proyectos
│   └── icons/                           # Tecnologías e íconos de la sección Habilidades (Power BI, SQL, etc.)
└── README.md                            # Documentación del proyecto
```

---

## 📍 Secciones del Sitio

* **Inicio (`#perfil`):** Hero section con foto de perfil, presentación principal, métricas de impacto (registros procesados, optimizaciones de rendimiento, años de experiencia) y enlaces a redes.
* **Proyectos (`#portafolio`):** Cuadrícula de tarjetas con filtrado interactivo por tecnología. Cada tarjeta incluye captura, etiquetas, descripción y enlace directo al repositorio.
* **Habilidades (`#habilidades`):** Grid de 12 tarjetas en disposición horizontal (*Ícono + Título + Descripción*) con las herramientas del stack técnico.
* **Experiencia (`#experiencia`):** Línea de tiempo profesional interactiva con detalle de empresa, periodo, rol, modalidad y logros clave.
* **Contacto (`#contacto`):** Bloque informativo "Sobre mí" y llamada a la acción para canales directos de comunicación.
* **Pie de Página (`#site-footer`):** Navegación secundaria, atribución, accesos directos y botón flotante de retorno al encabezado (*Scroll to top*).

---

## 👩🏻‍💻 Notas Técnicas & Arquitectura

* **Iconografía:** Los íconos de la interfaz general (menú, flechas, acciones) se consumen desde la CDN de **Lucide Icons** mediante la inicialización dinámica `lucide.createIcons()`. Los íconos técnicos de la sección *Habilidades* son recursos vectoriales locales en `img/icons/`.
* **Tipografía:** Se utiliza **Inter**, importada directamente desde Google Fonts.
* **Zero-Build Step:** No requiere `npm`, `webpack` ni ningún instalador de paquetes. Para probarlo localmente, basta con clonar el repositorio y abrir `index.html` en cualquier navegador o mediante la extensión *Live Server* de VS Code.
* **Desplazamiento Preciso:** El script de *Smooth Scroll* calcula dinámicamente la altura del `#site-header` fijo para garantizar que las secciones no queden sobrepuestas tras la navegación por anclas.

---

## 📩 Contacto

* **LinkedIn:** [linkedin.com/in/ambarsquintana](https://www.linkedin.com/in/ambarsquintana/)
* **GitHub:** [github.com/ambarsquintana](https://github.com/ambarsquintana)
* **Correo:** [ambarsquintana@gmail.com](mailto:ambarsquintana@gmail.com)
