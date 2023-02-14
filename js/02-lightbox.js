import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galeryImg = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}"> 
    <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
const galleryEls = galleryItems.map(galeryImg).join("");
galleryEl.insertAdjacentHTML("afterbegin", galleryEls);
let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // do something…
});
