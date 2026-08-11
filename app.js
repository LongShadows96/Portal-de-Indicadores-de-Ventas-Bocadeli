/* ============================================================
   Portal de Indicadores de Ventas — Bocadeli
   Este script SOLO lee data/meses.json y dibuja las tarjetas.
   No necesitas tocar este archivo para agregar meses o links.
   ============================================================ */

const ICONOS = {
  filled: "bar_chart",
  empty: "hourglass_empty",
};

async function cargarDatos() {
  const grid = document.getElementById("grid");
  const banner = document.getElementById("status-banner");

  try {
    // Cache-busting: le agregamos un parámetro con la hora actual
    // y forzamos "no-store" para que el navegador SIEMPRE pida
    // la versión más reciente de meses.json, nunca una guardada
    // en caché. Así, cuando edites el JSON en GitHub, el cambio
    // se refleja de inmediato para cualquiera que abra la página.
    const url = `data/meses.json?v=${Date.now()}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error(`No se pudo cargar meses.json (${res.status})`);

    const data = await res.json();
    render(data);
    banner.hidden = true;
  } catch (err) {
    banner.hidden = false;
    banner.classList.add("error");
    banner.innerHTML = `
      <span class="material-symbols-outlined">error</span>
      <span>No se pudieron cargar los reportes. Revisa que data/meses.json exista y tenga un formato válido.</span>
    `;
    console.error(err);
  }
}

function render(data) {
  const grid = document.getElementById("grid");
  const yearLabel = document.getElementById("year-label");
  const anio = data.anio || new Date().getFullYear();

  yearLabel.textContent = anio;
  grid.innerHTML = "";

  (data.reportes || []).forEach((item, i) => {
    const tieneLink = !!item.link;
    const el = document.createElement(tieneLink ? "a" : "div");

    if (tieneLink) {
      el.href = item.link;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }

    const colorClass = `acc-${item.color || "terracotta"}`;
    el.className = `card ${tieneLink ? "filled" : "empty"} ${colorClass}`;

    el.innerHTML = `
      <div class="card-top">
        <span class="card-icon">
          <span class="material-symbols-outlined">${tieneLink ? ICONOS.filled : ICONOS.empty}</span>
        </span>
        <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <p class="card-month">${item.mes}</p>
      <p class="card-status">${tieneLink ? "Reporte disponible" : "Aún sin cargar"}</p>
      <div class="card-action">
        <span>${tieneLink ? "Ver reporte" : "Próximamente"}</span>
        ${tieneLink ? '<span class="material-symbols-outlined">arrow_forward</span>' : ""}
      </div>
    `;

    grid.appendChild(el);
  });
}

document.addEventListener("DOMContentLoaded", cargarDatos);
