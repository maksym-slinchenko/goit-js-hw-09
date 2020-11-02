export default closeLightbox;

const closeLightbox = event => {
  if (
    !(
      event.target.getAttribute('data-action') === 'close-lightbox' ||
      event.target.classList.contains('lightbox__content')
    )
  ) {
    return;
  }
  lightboxEl.classList.remove('is-open');
  lightboxImgEl.setAttribute('src', '');
};
document.body.addEventListener('click', closeLightbox);
