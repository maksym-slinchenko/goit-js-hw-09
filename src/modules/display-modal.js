export default displayModal;

const displayModal = event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  lightboxEl.classList.add('is-open');
  lightboxImgEl.setAttribute('src', event.target.dataset.source);
  lightboxImgEl.setAttribute('alt', event.target.getAttribute('alt'));
  scrollImage;
};
