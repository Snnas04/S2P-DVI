// Obtén el elemento del botón con el id 'openModalButton' en el documento
document.getElementById('openModalButton').addEventListener('click', () => {
  // Cuando se haga clic en el botón, se llama a la función 'openModal' del objeto 'electronAPI' expuesto por el proceso de precarga.
  window.electronAPI.openModal();
});
