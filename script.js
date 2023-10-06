function get(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`ERROR: ${selector} not found!`);
}
const form = get("#form");

let isValid = false;

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
