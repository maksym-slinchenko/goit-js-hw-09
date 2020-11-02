export default scrollImage;

const scrollImage = event => {
  if (event.code !== 'ArrowRight' && event.code !== 'ArrowLeft') {
    return;
  }

  let index = images.findIndex(arePicturesSame);

  if (event.code === 'ArrowRight') {
    index += 1;
  } else {
    index -= 1;
  }
  if (index < 0) {
    lightboxImgEl.setAttribute('src', images[images.length - 1].original);
    lightboxImgEl.setAttribute('alt', images[images.length - 1].description);
    return;
  }

  if (index < images.length) {
    lightboxImgEl.setAttribute('src', images[index].original);
    lightboxImgEl.setAttribute('alt', images[index].description);
  } else {
    lightboxImgEl.setAttribute('src', images[0].original);
    lightboxImgEl.setAttribute('alt', images[0].description);
  }
};
