import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createNewImg = ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
const galleryEls = galleryItems.map(createNewImg).join("");

galleryEl.insertAdjacentHTML("beforeend", galleryEls);
galleryEl.addEventListener("click", onPaletteConteinerClick);
function onPaletteConteinerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  galleryEl.addEventListener("keydown", escCloseFoto);
  function escCloseFoto(evt) {
    if (evt.code === "Escape") {
      instance.close();
      galleryEl.removeEventListener("keydown", escCloseFoto);
    }
  }
}
