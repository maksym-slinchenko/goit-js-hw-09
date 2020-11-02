export default closeLightboxByKey;

const closeLightboxByKey = event => {
  if (event.code !== 'Escape') {
    return;
  }
  {
    lightboxEl.classList.remove('is-open');
    lightboxImgEl.setAttribute('src', '');
    lightboxEl.insertAdjacentHTML(
      'beforeend',
      '<i class="material-icons">close</i>',
    );
  }
};
