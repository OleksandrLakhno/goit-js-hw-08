
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const createGallery = document.querySelector('.gallery');

const allGalleryEl = galleryItems.map(
    ({ preview, original, description }) => 
        `
        <a class = "gallery__link" href = "${original}">
        <img class = "gallery__image" src = "${preview}"
        alt = "${description}"/>
        </a>
        `
)
    .join('');

createGallery.insertAdjacentHTML('beforeend', allGalleryEl);

let gallery = new SimpleLightbox('.gallery a',
 {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
});