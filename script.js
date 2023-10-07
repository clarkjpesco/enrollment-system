function get(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`ERROR: ${selector} not found!`);
}
const form = get("#form");
var downloadButton = get("#downloadButton");
let isValid = false;

const closeBtn = get(".close-btn");
const modalOverlay = get(".modal-overlay");

closeBtn.addEventListener("click", closeModal);

function openModal() {
  modalOverlay.classList.add("open-modal");
}
function closeModal() {
  modalOverlay.classList.remove("open-modal");
}

function validateForm() {
  isValid = form.checkValidity();
}

function storeFormData() {
  const user = {
    lastname: form.lastname.value,
    firstname: form.firstname.value,
    middlename: form.middlename.value,
    birthplace: form.birthplace.value,
    presentaddress: form.presentaddress.value,
    gender: form.gender.value,
    birthday: form.birthday.value,
    civilstatus: form.civilstatus.value,
    nationality: form.nationality.value,
    religion: form.religion.value,
    contactnumber: form.contactnumber.value,
    email: form.email.value,

    fatherlastname: form.fatherlastname.value,
    fatherfirstname: form.fatherfirstname.value,
    fathermiddlename: form.fathermiddlename.value,

    fatherpresentaddress: form.fatherpresentaddress.value,
    fathermobile: form.fathermobile.value,

    motherlastname: form.motherlastname.value,
    motherfirstname: form.motherfirstname.value,
    mothermiddlename: form.mothermiddlename.value,

    motherpresentaddress: form.motherpresentaddress.value,
    mothermobile: form.mothermobile.value,

    course: form.course.value,
    coursemajor: form.coursemajor.value,
    courseyearlevel: form.courseyearlevel.value,
    courseshsstrand: form.courseshsstrand.value,
    enrollmenttype: form.enrollmenttype.value,

    schoollastattended: form.schoollastattended.value,
    schoolyear: form.schoolyear.value,
  };
  console.log(user);
  const idNumber = "565777879112";
  createQRCode(idNumber);
  openModal();
}

function createQRCode(idNumber) {
  var qrcodeElement = get("#qrcode");

  // Text or data you want to encode in the QR code
  var qrText = idNumber;

  // Create a QRCode object with the text and options
  var qrcode = new QRCode(qrcodeElement, {
    text: qrText,
    width: 128,
    height: 128,
  });
}

// Function to trigger the download
function downloadQRCode() {
  var qrcodeElement = get("#qrcode");
  var canvas = qrcodeElement.querySelector("canvas");
  var image = new Image();
  image.src = canvas.toDataURL("image/png");

  // Create a temporary link for download
  var a = document.createElement("a");
  a.href = image.src;
  a.download = "qrcode.png";
  a.click();
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  if (isValid) {
    storeFormData();
  }
}

// Event listeners
form.addEventListener("submit", processFormData);
// Add a click event listener to the download button
downloadButton.addEventListener("click", downloadQRCode);
