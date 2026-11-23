import './ai-indaba-3d-map/dist/ai-indaba-map.js';

const map = document.querySelector('ai-indaba-map');
map.addEventListener('locationselect', event => {
  console.info('Selected map location:', event.detail);
});
