// Demo simple para la plantilla de tarea
document.addEventListener('DOMContentLoaded', ()=> {
  const out = document.getElementById('output');
  const btn = document.getElementById('runBtn');

  btn.addEventListener('click', () => {
    const now = new Date().toLocaleString();
    out.textContent = `Demo ejecutada correctamente. Hora local: ${now}`;
  });
});