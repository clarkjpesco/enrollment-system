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

async function askQuestion(e) {
  closeEstatModal();
  const button = e.currentTarget;
  // const shouldCancel = 'cancel' in button.dataset;
  const shouldCancel = button.hasAttribute("data-cancel");
  const answer = await ask({
    title: button.dataset.question,
    cancel: shouldCancel,
  });
  console.log(answer);
}

// coded by clark joy pesco 28/05/2022
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function destroy(popup) {
  popup.classList.remove("open");
  await wait(1000);
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function (resolve) {
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `<fieldset>
      <label>${options.title}</label>
      <input type="text" name="input" />
      <button type="submit">Submit</button>
      </fieldset>
      `
    );

    console.log(popup);

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.type = "button";
      skipButton.textContent = "Cancel";
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        "click",
        function () {
          resolve(null);
          destroy(popup);
        },
        { once: true }
      );
    }
    popup.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        console.log("SUBMITTED!");
        resolve(e.target.input.value);
        destroy(popup);
      },
      { once: true }
    );

    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add("open");
  });
}

const buttons = document.querySelectorAll("[data-question]");
buttons.forEach((button) => button.addEventListener("click", askQuestion));
