// Real photographs and screenshots are optional.
// If the file exists, show it; otherwise leave the layout clean and text-only.
document.querySelectorAll('[data-optional-image]').forEach((img) => {
  const wrapper = img.closest('[data-optional-wrap]');
  if (!wrapper) return;
  const update = () => wrapper.classList.toggle('is-loaded', img.complete && img.naturalWidth > 0);
  img.addEventListener('load', update);
  img.addEventListener('error', update);
  update();
});
