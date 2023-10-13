function get(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`ERROR: ${selector} not found!`);
}
const enrollBtn = get("#enrollBtn");
const estatCloseBtn = get("#closeModal-btn");
const estatmodalOverlay = get(".eStatModal");

enrollBtn.addEventListener("click", openEstatModal);
estatCloseBtn.addEventListener("click", closeEstatModal);

function openEstatModal() {
  console.log("Hello");
  estatmodalOverlay.classList.add("openStatModal");
}
function closeEstatModal() {
  estatmodalOverlay.classList.remove("openStatModal");
}
