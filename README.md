# Portal de Indicadores de Ventas — Bocadeli

Página estática (Material Design 3) que muestra un reporte de Power BI por mes. Estructura **plana, sin subcarpetas**, para poder subir todos los archivos de una sola vez a GitHub.

## Archivos

```
index.html      ← estructura de la página (no necesitas tocarlo)
styles.css      ← estilos Material Design (no necesitas tocarlo)
app.js          ← lógica que dibuja las tarjetas (no necesitas tocarlo)
meses.json      ← 👉 EL ÚNICO ARCHIVO QUE EDITAS
README.md
```

## Cómo agregar o actualizar un mes

Abre `meses.json`. Cada mes es un bloque así:

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

## Cómo subir esto a GitHub (sin carpetas)

1. Crea un repositorio nuevo en GitHub.
2. Dentro del repo, click en **Add file → Upload files**.
3. Selecciona los 4 archivos (`index.html`, `styles.css`, `app.js`, `meses.json`) **a la vez** — puedes arrastrarlos juntos o usar "choose your files" y seleccionarlos con Ctrl/Cmd click. Como no hay subcarpetas, no necesitas arrastrar ninguna carpeta.
4. Click en **Commit changes**.
5. Ve a **Settings → Pages**, en "Branch" selecciona `main` y carpeta `/ (root)`.
6. En 1–2 minutos tu página estará en:
   `https://tu-usuario.github.io/nombre-del-repo/`

## Editar los meses después, sin descargar nada

1. En GitHub, entra a `meses.json` dentro de tu repositorio.
2. Click en el ícono de lápiz (✏️) "Edit this file".
3. Agrega o edita el mes que necesites.
4. Click en **Commit changes**.

La página se actualiza sola en 1–2 minutos (GitHub Pages usa una CDN que a veces tarda un poco en reflejar el cambio).

## Probarlo en tu computadora antes de subirlo

Si abres `index.html` haciendo doble clic, vas a ver un error de carga — es porque los navegadores bloquean que la página lea `meses.json` cuando se abre directo desde el disco (`file://`). Para probarlo local:

- En VS Code, instala la extensión **Live Server**, clic derecho sobre `index.html` → "Open with Live Server".
- O simplemente sube los archivos a GitHub Pages y pruébalo ahí — ahí sí funciona sin configurar nada.
