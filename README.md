<h1 align="center">🌸 The Macori Shoes 🌸</h1>
<p align="center"><em>Zapatos con alma, para mujeres con estilo.</em></p>

<p align="center">
  <a href="https://wa.me/50496060472">💬 WhatsApp</a> ·
  <a href="https://www.instagram.com/macori.shoes">📸 Instagram</a> ·
  <a href="https://www.facebook.com/profile.php?id=61583667752378">📘 Facebook</a>
</p>

<br>

## 💖 Sobre la tienda

**The Macori Shoes** nació como un pequeño negocio familiar en Honduras, con la idea
de que cada mujer merece sentirse especial desde los pies hasta la cabeza. Este
repositorio es el sitio web de la tienda: un catálogo en línea donde las clientas
pueden explorar la colección, armar su pedido y confirmarlo directo por WhatsApp.

### ✨ Qué puedes hacer en el sitio

- 👠 **Explorar el catálogo** por categoría — tacones, sandalias, flats, botas,
  sneakers y eventos especiales — con búsqueda y filtros.
- 🖼️ **Ver cada modelo en detalle**, con sus variantes de color y tallas
  disponibles.
- 🛒 **Armar un carrito** de compra y enviarlo listo por WhatsApp.
- 🎁 **Pedir un modelo especial** subiendo una foto de referencia, talla y
  presupuesto — ideal para esas clientas que vieron "ese" zapato en otro lado.
- 💌 **Conocer la historia de la marca** en la sección Nosotros.
- 📱 Todo pensado para verse igual de bien en el celular que en la computadora.

<br>

---

<br>

<details>
<summary><strong>🔧 Documentación técnica (para quien edite el código)</strong></summary>

<br>

## Stack

Sitio 100% estático — sin build, sin frameworks, sin `npm install`:

- `index.html` — toda la marca (HTML + CSS + JS en un solo archivo).
- `products.js` — catálogo de productos por defecto (respaldo si el Google
  Sheet no carga).
- `Img/` — imágenes locales (marca y zapatos).
- `sheets-template/productos.csv` — plantilla de ejemplo para el catálogo vía
  Google Sheets.

## Cómo probarlo localmente

Como no hay build, basta con servir la carpeta con cualquier servidor
estático (abrirlo directo con `file://` no funciona bien porque el
navegador bloquea el `fetch` al Google Sheet por CORS):

```bash
npx http-server -p 8080
# o
python -m http.server 8080
```

Y abrir `http://localhost:8080`.

## Catálogo desde Google Sheets (opcional)

El catálogo puede alimentarse desde una hoja de Google Sheets en vez de
`products.js`. Se configura en `index.html`, constante `SHEET_CSV_URL`
(cerca del inicio del `<script>` principal):

- Si está vacía o el Sheet falla al cargar, se usan los productos de
  `products.js`.
- Si el Sheet carga con filas válidas, **reemplaza por completo** la lista
  de productos (no se mezclan ambas fuentes).
- El Sheet debe estar compartido como *"Cualquier persona con el enlace
  puede ver"*.
- Columnas esperadas: ver `sheets-template/productos.csv`
  (`id, nombre, categoria, publico, precio, precio_anterior, etiqueta,
  tallas, descripcion, emoji, imagen, colores`).
- En la columna **`imagen`** se puede pegar el enlace normal de "Compartir"
  de Google Drive (`.../file/d/ID/view?usp=sharing`) — el código lo
  convierte automáticamente a un formato que sí carga como foto
  (`normalizeImageUrl()` en `index.html`).
- La columna **`colores`** acepta variantes con formato
  `Nombre:hex:foto1|foto2; Nombre2:hex2:foto1` para productos con más de un
  color.
- La columna **`categoria`** acepta varias categorías separadas por comas,
  por ejemplo `sandalias,oferta`. En `products.js` también puedes usar
  `cat: ['sandalias', 'oferta']`.

## Otros ajustes rápidos

- **Número de WhatsApp**: constante `WA_NUM` en `index.html`.
- **Tallas del formulario de Pedidos Especiales**: constante `SHOE_SIZES`.
- **Colores/tipografías de la marca**: variables CSS en `:root` al inicio
  del `<style>`.

## Scripts de mantenimiento

`apply_image_patch.py`, `auto_patch_image_refs.py`, `compare_image_refs.py`,
`patch_image_refs.py` y `suggest_image_refs.py` son utilidades puntuales que
se usaron para emparejar las referencias de imágenes en `products.js` con
los archivos reales en `Img/zapatos/` durante una limpieza puntual del
catálogo. No forman parte del sitio en producción.

</details>
