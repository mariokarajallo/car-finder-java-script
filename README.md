# Car Finder 🚗🔍
Buscador de automóviles con filtros en tiempo real (HTML, CSS y JavaScript).
-	Elemento Select de años.
-	Lectura de Elemento Select.
-	Filtro de campos por marca, año, precio, puertas etc.
-	Listar resultados según filtro de busqueda.
-	Mostrar mensaje cuando no hay resultados según filtro de busqueda.



## Demo 
Para mirar la demo del proyecto visita: [Car Finder](https://jsproyecto3.netlify.app/)

![preview](car-finder.webp)
<br>

**Características**

- **Filtrado dinámico:** Permite filtrar la lista de autos por marca, año, precio mínimo/máximo, número de puertas, transmisión y color.
- **Interfaz ligera:** HTML y CSS simples para mostrar resultados en el navegador sin dependencias.
- **Datos embebidos:** Los autos se leen desde `js/db.js` como un array de objetos.
- **Actualización instantánea:** Al cambiar cualquier filtro, los resultados se actualizan automáticamente.

**Tecnologías utilizadas**

- **HTML5**: estructura básica de la página (`index.html`).
- **CSS**: estilos en `css/app.css`, `css/normalize.css`, `css/skeleton.css`.
- **JavaScript (vanilla)**: lógica en `js/app.js` y datos en `js/db.js`.

**Instalación y requisitos**

- Requisitos: un navegador moderno (Chrome, Firefox, Edge, Safari).
- Instalación: clona o descarga el repositorio y abre `index.html` en tu navegador. No necesita servidor ni instalación de dependencias.

**Cómo funciona**

- Al cargar la página, el script muestra todos los autos definidos en `js/db.js`.
- El select de `year` se genera dinámicamente desde el año actual hacia atrás (10 años).
- Cuando el usuario cambia cualquier control (`marca`, `year`, `minimo`, `maximo`, `puertas`, `transmision`, `color`), el objeto `datosBusqueda` se actualiza y se llama a `filtrarAuto()`.
- `filtrarAuto()` aplica una cadena de filtros (marca, año, precio mínimo/máximo, puertas, transmisión, color) sobre el array `autos` y muestra los resultados.

**Validaciones**

- Los filtros se aplican sólo si el criterio está presente (por ejemplo, si no hay valor seleccionado para `marca`, no se filtra por marca).
- Los valores numéricos (como `year` y `puertas`) se parsean con `parseInt` en los `change` handlers.
- Para `minimo` y `maximo` (precio), los valores provienen de inputs y la comparación se realiza usando coerción numérica implícita en JavaScript (`auto.precio >= minimo`).
- Si no hay resultados para la combinación de filtros, se muestra un mensaje de "No hay resultados intente otra busqueda".

**Estructura de archivos**

```bash
car-finder-java-script/
├── css/
│   ├── app.css
│   ├── normalize.css
│   └── skeleton.css
├── js/
│   ├── app.js
│   └── db.js
├── index.html
├── README.md
└── LICENSE
```

- `css/app.css`: Estilos personalizados para la interfaz del proyecto.
- `css/normalize.css`: Normaliza estilos entre navegadores.
- `css/skeleton.css`: Framework ligero de estilos (skeleton) usado para la maquetación.
- `js/app.js`: Lógica principal — generación del select de años, manejo de eventos de los filtros, funciones de filtrado y renderizado de resultados.
- `js/db.js`: Array de objetos `autos` que actúa como la «base de datos» local para la demo.
- `index.html`: Página principal que carga estilos y scripts y contiene el HTML de la interfaz.
- `README.md`: Documentación del proyecto.
- `LICENSE`: Archivo de licencia del proyecto.

**Contribuciones**

- Las contribuciones son bienvenidas. Para aportar:
	- Haz un fork del repositorio.
	- Crea una rama (`feature/mi-mejora`).
	- Envía un pull request describiendo los cambios.

**Créditos**

- Proyecto original del curso "JavaScript Moderno" por Juan (adaptado/ejemplificado en este repositorio).

**Licencia**

- Este proyecto está bajo la licencia especificada en el archivo `LICENSE`.

---

⌨️ con ❤️ por [Mario Karajallo](https://karajallo.com) 😊