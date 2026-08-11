# Portal de Indicadores de Ventas — Bocadeli

Página estática (Material Design 3) que muestra un reporte de Power BI por mes. Pensada para subir directo a **GitHub Pages**.

## Estructura de archivos

```
portal-ventas/
├── index.html          ← estructura de la página (no necesitas tocarlo)
├── css/
│   └── styles.css       ← estilos Material Design (no necesitas tocarlo)
├── js/
│   └── app.js            ← lógica que dibuja las tarjetas (no necesitas tocarlo)
├── data/
│   └── meses.json         ← 👉 EL ÚNICO ARCHIVO QUE EDITAS
└── README.md
```

## Cómo agregar o actualizar un mes

Abre `data/meses.json`. Cada mes es un bloque así:

```json
{
  "mes": "Agosto",
  "color": "verde",
  "link": "https://app.powerbi.com/view?r=XXXXXXXX"
}
```

- **mes**: nombre a mostrar (ej. "Agosto").
- **color**: uno de `terracotta`, `azul`, `morado`, `verde`, `mostaza`.
- **link**: la URL de "Publicar en la web" de tu reporte de Power BI.
  - Si todavía no tienes el link, deja `"link": null` y la tarjeta se muestra automáticamente como **"Próximamente"** (no clickeable).
  - En cuanto pegues el link y subas el cambio, la tarjeta se activa sola.

Para agregar un mes nuevo, copia un bloque completo dentro de `"reportes": [ ... ]`, sepáralo con una coma y edítalo. El orden del arreglo es el orden en que se muestran las tarjetas.

También puedes cambiar el año mostrado editando `"anio": 2026` arriba del archivo.

### Cómo obtener el link de Power BI

En tu reporte, ve a **Archivo → Insertar reporte → Publicar en la web**, genera el enlace y pega esa URL en `"link"`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o privado con GitHub Pro/Team/Enterprise).
2. Sube todos estos archivos manteniendo la misma estructura de carpetas.
3. Ve a **Settings → Pages**, y en "Branch" selecciona `main` (o la rama donde subiste los archivos) y carpeta `/ (root)`.
4. Espera 1–2 minutos y tu página quedará publicada en:
   `https://tu-usuario.github.io/nombre-del-repo/`

## Sobre la caché (para que los cambios se vean al instante)

Ya está resuelto en el código, pero por si te interesa saber qué se hizo:

- `index.html` incluye metaetiquetas `Cache-Control: no-cache` para que el navegador no guarde la página en caché.
- `js/app.js` pide `data/meses.json` con `cache: "no-store"` y le agrega `?v=<hora actual>` a la URL, así el navegador **siempre** trae la versión más reciente del archivo en lugar de una guardada.

**Nota sobre GitHub Pages:** GitHub Pages usa una CDN (Fastly) que a veces tarda **hasta unos minutos** en reflejar un cambio recién subido, incluso con estas medidas — es una capa fuera del control del código. Si haces un cambio y no lo ves de inmediato, espera 1–2 minutos y recarga con Ctrl+Shift+R (o Cmd+Shift+R en Mac) una vez.

## Editar los meses sin usar GitHub directamente

Si no quieres clonar el repo cada vez:

1. En GitHub, entra a `data/meses.json` dentro de tu repositorio.
2. Click en el ícono de lápiz (✏️) "Edit this file".
3. Agrega o edita el mes que necesites.
4. Click en **"Commit changes"**.

Eso es todo — la página se actualiza sola en 1–2 minutos.
