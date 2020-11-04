import images from './modules/gallery-items';

//Создание и рендер разметки по массиву данных и предоставленному шаблону.
import creatImgItem from './modules/function-images-list-creater';

const galleryEl = document.querySelector('.js-gallery');
const imagesList = creatImgItem(images);
galleryEl.insertAdjacentHTML('beforeend', imagesList);

// Реализация делегирования на галерее ul.js-gallery и
// получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Функция сравнения картинки для определения индекса
import arePicturesSame from './modules/function-picture-comparator';

// функция перелистывания вправо
import scrollImage from './modules/function-scroll-image';

document.body.addEventListener('keydown', scrollImage);
document.body.addEventListener('keydown', scrollImage);

// вызов модального окна и подстановка картинки
const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImgEl = lightboxEl.querySelector('.lightbox__image');

import displayModal from './modules/display-modal';

galleryEl.addEventListener('click', displayModal);

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.

// Дополнительное задание: Закрытие модального окна по клику на div.lightbox__overlay.
import closeLightbox from './modules/close-lightbox';

document.body.addEventListener('click', closeLightbox);
//Дополнительное задание: Закрытие модального окна по нажатию клавиши ESC
import closeLightboxByKey from './modules/close-by-key';

document.body.addEventListener('keydown', closeLightboxByKey);
