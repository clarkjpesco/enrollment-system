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

function appendDiv() {
  var addressInputText = document.getElementById("presentaddress");
  var appendedDiv = document.querySelector(".about");
  var inputTextHeight = addressInputText.offsetHeight;
  var inputTextWidth = addressInputText.offsetWidth;
  // Check if the appended div already exists
  if (!appendedDiv) {
    // Create a new div element
    var newDiv = document.createElement("article");
    newDiv.innerHTML = `
    
    <div class="btn-container">
      <button class="tab-btn active" data-id="region">region</button>
      <button class="tab-btn" data-id="province">province</button>
      <button class="tab-btn" data-id="city">city</button>
      <button class="tab-btn" data-id="barangay">barangay</button>
    </div>

    <article class="about-content">
      <div class="content active" id="region">
        <ul class="regionList">
          <li regionId="001">Metro Manila</li>
          <li regionId="002">Cordillera</li>
          <li regionId="003">Ilocos</li>
          <li regionId="004">Cagayan Valley</li>
          <li regionId="005">Central Luzon</li>
          <li regionId="006">Calabarzon</li>
          <li regionId="007">Mimaropa</li>
          <li regionId="008">Bicol</li>
          <li regionId="009">Western Visayas</li>
          <li regionId="010">Central Visayas</li>
          <li regionId="011">Eastern Visayas</li>
          <li regionId="012">Zamboanga Peninsula</li>
          <li regionId="013">Northern Mindanao</li>
          <li regionId="014">Davao Region</li>
          <li regionId="015">Soccsksargen</li>
          <li regionId="016">Caraga</li>
          <li regionId="017">BARMM</li>
        </ul>
      </div>
      <div class="content" id="province">
        <ul class="provinceList">
          <li regionId="011" provinceId="001">Biliran</li>
          <li regionId="011" provinceId="002">Eastern Samar</li>
          <li regionId="011" provinceId="003">Leyte</li>
          <li regionId="011" provinceId="004">Northern Samar</li>
          <li regionId="011" provinceId="005">Samar</li>
          <li regionId="011" provinceId="006">Southern Leyte</li>
        </ul>
      </div>
      <div class="content" id="city">
        <ul class="cityList">
          <li regionId="011" provinceId="006" cityId="001">Anahawan</li>
          <li regionId="011" provinceId="006" cityId="002">Bontoc</li>
          <li regionId="011" provinceId="006" cityId="003">Hinunangan</li>
          <li regionId="011" provinceId="006" cityId="004">Hinundayan</li>
          <li regionId="011" provinceId="006" cityId="005">Libagon</li>
          <li regionId="011" provinceId="006" cityId="006">Liloan</li>
          <li regionId="011" provinceId="006" cityId="007">Limasawa</li>
          <li regionId="011" provinceId="006" cityId="008">
            Maasin City
          </li>
          <li regionId="011" provinceId="006" cityId="009">Macrohon</li>
          <li regionId="011" provinceId="006" cityId="010">Malitbog</li>
          <li regionId="011" provinceId="006" cityId="011">
            x Padre Burgos
          </li>
          <li regionId="011" provinceId="006" cityId="012">Pintuyan</li>
          <li regionId="011" provinceId="006" cityId="013">
            Saint Bernard
          </li>
          <li regionId="011" provinceId="006" cityId="014">
            San Francisco
          </li>
          <li regionId="011" provinceId="006" cityId="015">San Juan</li>
          <li regionId="011" provinceId="006" cityId="016">
            San Ricardo
          </li>
          <li regionId="011" provinceId="006" cityId="017">Silago</li>
          <li regionId="011" provinceId="006" cityId="018">Sogod</li>
          <li regionId="011" provinceId="006" cityId="019">
            Tomas Oppus
          </li>
        </ul>
      </div>
      <div class="content" id="barangay">
        <ul class="barangayList">
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="001"
          >
            Abgao
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="002"
          >
            Acasia
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="003"
          >
            Asuncion
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="004"
          >
            Bactul I
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="005"
          >
            Bactul II
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="006"
          >
            Badiang
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="007"
          >
            Bagtican
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="008"
          >
            Basak
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="009"
          >
            Bato I
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="010"
          >
            Bato II
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="011"
          >
            Batuan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="012"
          >
            Baugo
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="013"
          >
            Bilibol
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="014"
          >
            Bogo
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="015"
          >
            Cabadiangan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="016"
          >
            Cabulihan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="017"
          >
            Cagnituan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="018"
          >
            Cambooc
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="019"
          >
            Cansirong
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="020"
          >
            Canturing
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="021"
          >
            Canyoum
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="022"
          >
            Combado
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="023"
          >
            Dongon
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="024"
          >
            Gawisan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="025"
          >
            Guadalupe
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="026"
          >
            Hanginan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="027"
          >
            Hantag
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="028"
          >
            Hinapu Daku
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="029"
          >
            Hinapu Gamay
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="030"
          >
            Ibarra
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="031"
          >
            Isagani
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="032"
          >
            Laboon
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="033"
          >
            Lanao
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="034"
          >
            Libertad
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="035"
          >
            Libhu
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="036"
          >
            Lib-og
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="037"
          >
            Lonoy
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="038"
          >
            Lunas
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="039"
          >
            Mahayahay
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="040"
          >
            Malapoc Norte
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="041"
          >
            Malapoc Sur
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="042"
          >
            Mambajao
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="043"
          >
            Manhilo
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="044"
          >
            Mantahan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="045"
          >
            Maria Clara
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="046"
          >
            Matin-ao
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="047"
          >
            Nasaug
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="048"
          >
            Nati
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="049"
          >
            Nonok Norte
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="050"
          >
            Nonok Sur
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="051"
          >
            Panan-awan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="052"
          >
            Pansaan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="053"
          >
            Pasay
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="054"
          >
            Pinaskohan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="055"
          >
            Rizal
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="056"
          >
            San Agustin
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="057"
          >
            San Isidro
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="058"
          >
            San Jose
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="059"
          >
            San Rafael
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="060"
          >
            Santa Cruz
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="061"
          >
            Santo Niño
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="062"
          >
            Santa Rosa
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="063"
          >
            Santo Rosario
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="064"
          >
            Soro-soro
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="065"
          >
            Tagnipa
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="066"
          >
            Tam-is
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="067"
          >
            Tawid
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="068"
          >
            Tigbawan
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="069"
          >
            Tomoy-tomoy
          </li>
          <li
            regionId="011"
            provinceId="006"
            cityId="008"
            barangayId="070"
          >
            Tunga-tunga
          </li>
        </ul>
      </div>
    </article>
  `;
    newDiv.className = "about";

    // Append the new div as a child node to the input text element
    addressInputText.parentNode.insertBefore(
      newDiv,
      addressInputText.nextSibling
    );
    // Set the top property based on the input text height
    newDiv.style.top = addressInputText.offsetTop + inputTextHeight + "px";
    // Set the width property based on the input text width
    newDiv.style.width = inputTextWidth + "px";

    // Script for address
    const about = get(".about");
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");
    const regionList = document.querySelector(".regionList");
    const provinceList = document.querySelector(".provinceList");
    const cityList = document.querySelector(".cityList");
    const barangayList = document.querySelector(".barangayList");
    const addressInput = document.querySelector("#presentaddress");
    let tempAddressInput;
    about.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      if (id == "region") {
        // remove active from other buttons
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide all articles
        articles.forEach((article) => {
          article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
        addressInput.value = "";
      }
    });

    // regionList.addEventListener("click", showItem);
    regionList.addEventListener("click", function (event) {
      // Check if the clicked element is an <li> element
      if (event.target.tagName === "LI") {
        // Get the value of the clicked list item
        var clickedItemValue = event.target.innerHTML;
        var clickedItemAttributeValue = event.target.getAttribute("regionId");

        // Log the attribute value to the console or do something else with it
        console.log(`REGION ID: ${clickedItemAttributeValue}`);
        // Log the value to the console or do something else with it
        console.log(`REGION NAME: ${clickedItemValue}`);
        addressInput.value = clickedItemValue;
        console.log(addressInput.value);
        nextTab("province", btns, articles);
      }
    });
    provinceList.addEventListener("click", function (event) {
      // Check if the clicked element is an <li> element
      if (event.target.tagName === "LI") {
        // Get the value of the clicked list item
        var clickedItemValue = event.target.innerHTML;
        var regionIdValue = event.target.getAttribute("regionId");
        var provinceIdValue = event.target.getAttribute("provinceId");

        // Log the attribute value to the console or do something else with it
        console.log(`REGION ID: ${regionIdValue}`);
        console.log(`province ID: ${provinceIdValue}`);
        // Log the value to the console or do something else with it
        console.log(`province NAME: ${clickedItemValue}`);
        addressInput.value = `${
          addressInput.value
        }, ${clickedItemValue.trim()}`;
        nextTab("city");
      }
    });
    cityList.addEventListener("click", function (event) {
      // Check if the clicked element is an <li> element
      if (event.target.tagName === "LI") {
        // Get the value of the clicked list item
        var clickedItemValue = event.target.innerHTML;
        var regionIdValue = event.target.getAttribute("regionId");
        var provinceIdValue = event.target.getAttribute("provinceId");
        var cityIdValue = event.target.getAttribute("cityId");

        // Log the attribute value to the console or do something else with it
        console.log(`REGION ID: ${regionIdValue}`);
        console.log(`PROVINCE ID: ${provinceIdValue}`);
        console.log(`CITY ID: ${cityIdValue}`);
        // Log the value to the console or do something else with it
        console.log(`CITY NAME: ${clickedItemValue.trim()}`);
        addressInput.value = `${
          addressInput.value
        }, ${clickedItemValue.trim()}`;
        tempAddressInput = addressInput.value;
        console.log(tempAddressInput);
        nextTab("barangay");
      }
    });
    barangayList.addEventListener("click", function (event) {
      // Check if the clicked element is an <li> element
      if (event.target.tagName === "LI") {
        // Get the value of the clicked list item
        var clickedItemValue = event.target.innerHTML;
        var regionIdValue = event.target.getAttribute("regionId");
        var provinceIdValue = event.target.getAttribute("provinceId");
        var cityIdValue = event.target.getAttribute("cityId");
        var barangayIdValue = event.target.getAttribute("barangayId");

        // Log the attribute value to the console or do something else with it
        console.log(`REGION ID: ${regionIdValue}`);
        console.log(`PROVINCE ID: ${provinceIdValue}`);
        console.log(`CITY ID: ${cityIdValue}`);
        console.log(`BARANGAY ID: ${barangayIdValue}`);
        // Log the value to the console or do something else with it
        console.log(`BARANGAY NAME: ${clickedItemValue.trim()}`);
        addressInput.value = `${tempAddressInput}, ${clickedItemValue.trim()}`;
      }
    });

    function nextTab(id) {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btns.forEach((btn) => {
        if (btn.dataset.id == id) {
          btn.classList.add("active");
        }
      });

      // hide all articles
      articles.forEach((article) => {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }

    // Add click event listener to remove the div when the user clicks outside
    document.addEventListener("click", checkClickOutside);
  }
}

function checkClickOutside(event) {
  var addressInputText = document.getElementById("presentaddress");
  var appendedDiv = document.querySelector(".about");

  // Check if the clicked element is not the input text or the appended div
  if (
    event.target !== addressInputText &&
    event.target !== appendedDiv &&
    !appendedDiv.contains(event.target)
  ) {
    // Remove the appended div
    if (appendedDiv) {
      appendedDiv.parentNode.removeChild(appendedDiv);
    }

    // Remove the click event listener to avoid multiple removals
    document.removeEventListener("click", checkClickOutside);
  }
}
const addressInputText = document.getElementById("presentaddress");
addressInputText.addEventListener("click", appendDiv);

function openModal() {
  modalOverlay.classList.add("open-modal");
}
function closeModal() {
  modalOverlay.classList.remove("open-modal");
}

const contactNumber = get("#contactnumber"); // Replace 'yourInputElementId' with the actual ID of your input element.

contactNumber.addEventListener("focus", () => {
  // Input is in focus.
  console.log("Input is in focus");
});

contactNumber.addEventListener("blur", (e) => {
  // Input is out of focus.
  console.log("Input is out of focus");
  console.log(e.target.value);
  let contactNumberValue = e.target.value;
  if (has11Digits(contactNumberValue)) {
    console.log("Input text contains 11 digits.");
    e.target.value = addHyphens(contactNumberValue);
  } else {
    console.log("Input text does not contain 11 digits.");
  }
});

function has11Digits(inputText) {
  // Use a regular expression to match 11 consecutive digits.
  const pattern = /^\d{11}$/;
  return pattern.test(inputText);
}

function addHyphens(inputText) {
  let outputText = "";
  for (let i = 0; i < inputText.length; i++) {
    outputText += inputText[i];
    if (i == 3) {
      outputText += "-";
    }
    if (i == 6) {
      outputText += "-";
    }
  }
  return outputText;
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
    // enrollmenttype: form.enrollmenttype.value,

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

//home modal
