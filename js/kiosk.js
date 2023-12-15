// const close = document.getElementById("close");
const open = document.getElementById("enroll");
const modal = document.getElementById("modal");

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// // Hide modal
// close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

// new for modal
// btns
const enrolltabbtns = document.querySelectorAll(".enrolltab-btn");
// about
const enrollpagecontent = document.querySelector(".enrollpagecontent");
// articles
const enrollcontentshowhide = document.querySelectorAll(
  ".enrollcontentshowhide"
);

enrollpagecontent.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    enrolltabbtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide all articles
    enrollcontentshowhide.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
