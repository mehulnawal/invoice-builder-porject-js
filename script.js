let theme = document.getElementById("theme");
let themeName = document.getElementById("themeName");
let darkTheme = document.getElementById("darkTheme");
let lightTheme = document.getElementById("lightTheme");
let body = document.querySelector("body");
let input = document.querySelectorAll("input");
let invoiceForm = document.getElementById("invoiceForm");
let invoicePreview = document.getElementById("invoicePreview");

theme.addEventListener("click", function () {
    if (themeName.innerText == "Dark Mode") {
        lightTheme.style.display = "block";
        darkTheme.style.display = "none";
        themeName.innerText = "Light Mode";
        sessionStorage.setItem("Theme", "Light");
        lightThemeFunc();
    }
    else {
        lightTheme.style.display = "none";
        darkTheme.style.display = "block";
        themeName.innerText = "Dark Mode";
        sessionStorage.setItem("Theme", "Dark");
        darkThemeFunc();
    }
});

// Light theme function
function lightThemeFunc() {
    body.style.backgroundColor = "#0F172A";
    body.style.color = "#fff";
    invoiceForm.style.backgroundColor = "#1E293B";
    invoicePreview.style.backgroundColor = "#1E293B";

    input.forEach((bg) => {
        bg.style.backgroundColor = "#1E293B";
        bg.style.color = "#fff";
    });
}

// Dark theme function
function darkThemeFunc() {
    body.style.backgroundColor = "#f9fafb";
    body.style.color = "#000";
    invoiceForm.style.backgroundColor = "#fff";
    invoicePreview.style.backgroundColor = "#fff";

    input.forEach((bg) => {
        bg.style.backgroundColor = "#fff";
        bg.style.color = "#000";
    });
}

// Your company Name
let companyInput = document.getElementById("companyInput");
let companyError = document.getElementById("companyError");
let companyInputCorrect = 0;

companyInput.addEventListener("input", function () {
    let companyNameRegex = /^[a-zA-Z]+$/;
    if (companyInput.value == "") {
        companyError.innerText = "Enter your company name";
        companyInputCorrect = 0;
    }
    else if (!companyInput.value.match(companyNameRegex)) {
        clientInput.value = "";
        companyError.innerText = "Company name can only have characters";
        companyInputCorrect = 0;
    }
    else {
        companyError.innerText = "";
        companyInputCorrect = 1;
        sessionStorage.setItem("Company Name", companyInput.value);
    }
});

// client Name
let clientInput = document.getElementById("clientInput");
let clientError = document.getElementById("clientError");
let clientInputCorrect = 0;

clientInput.addEventListener("input", function () {
    let clientNameRegex = /^[a-zA-Z]+$/;
    if (clientInput.value == "") {
        clientError.innerText = "Enter client name";
        clientInputCorrect = 0;
    }
    else if (!clientInput.value.match(clientNameRegex)) {
        clientInput.value = "";
        clientError.innerText = "Client name can only have characters";
        clientInputCorrect = 0;
    }
    else {
        clientError.innerText = "";
        clientInputCorrect = 1;
        sessionStorage.setItem("Client Name", clientInput.value);
    }
});

// Item description
let descriptionInput = document.getElementById("descriptionInput");
let descriptionError = document.getElementById("descriptionError");
let descriptionInputCorrect = 0;

descriptionInput.addEventListener("input", function () {
    // let descriptionInputRegex = /^[a-zA-Z0-9-]+$/;
    let descriptionInputRegex = /^(?=.*[a-zA-Z]).{3,}$/;
    if (descriptionInput.value == "") {
        descriptionError.innerText = "Enter item description";
        descriptionInputCorrect = 0;
    }
    else if (!descriptionInput.value.match(descriptionInputRegex)) {
        descriptionError.innerText = "Must contain at least 3 letters.";
        descriptionInputCorrect = 0;
    }
    else {
        descriptionError.innerText = "";
        descriptionInputCorrect = 1;
        sessionStorage.setItem("Description", descriptionInput.value);
    }
});

// Amount
let amountInput = document.getElementById("amountInput");
let amountError = document.getElementById("amountError");
let amountInputCorrect = 0;

amountInput.addEventListener("input", function () {
    let amountInputRegex = /^[0-9]+$/;
    if (amountInput.value == "") {
        amountError.innerText = "Enter Amount";
        amountInputCorrect = 0;
    }
    else if (!amountInput.value.match(amountInputRegex)) {
        amountError.innerText = "Amount can have only numbers";
        amountInputCorrect = 0;
    }
    else {
        amountError.innerText = "";
        amountInputCorrect = 1;
        sessionStorage.setItem("Amount", amountInput.value);
    }
});

// dates
// let issuedDateInput = document.getElementById("issuedDateInput");
// let issuedDateError = document.getElementById("issuedDateError");
// let issuedDateCorrect = 0;

// let dueDateInput = document.getElementById("dueDateInput");
// let dueDateError = dogucument.getElementById("dueDateError");
// let dueDateInputCorrect = 0;

// issuedDateInput.addEventListener("change", function () {
//     if (issuedDateInput.value == "") {
//         issuedDateError.innerText = "Enter invoice issued date";
//         issuedDateCorrect = 0;
//     }
//     else {
//         issuedDateError.innerText = "";
//         issuedDateCorrect = 1;
//     }
// })

// // Due Date Input
// dueDateInput.addEventListener("change", function () {
//     if (dueDateInput.value == "") {
//         dueDateError.innerText = "Enter due  date";
//         dueDateInputCorrect = 0;
//     }
//     else if (dueDateInput.value < issuedDateInput.value) {
//         dueDateError.innerText = "Due Date cannot be less than issued date";
//         dueDateInputCorrect = 0;
//     }
//     else {
//         dueDateError.innerText = "";
//         dueDateInputCorrect = 1;
//     }
// })


// Discount Checkbox


let discountCheckbox = document.getElementById("discountCheckbox");
let discountAmt = document.getElementById("discountAmt");
let discountCheckboxEnable = 0;
let discountVisible = 0;
let discountAmtInput = document.getElementById("discountAmtInput");
let discountAmtError = document.getElementById("discountAmtError");

discountCheckbox.addEventListener("change", function () {
    if (discountCheckbox.checked) {
        discountAmt.style.display = "block";
        discountVisible = 1;
        discountCheckboxEnable = 0;
        sessionStorage.setItem("discountAmtDiv", "true");

        discountAmtInput.addEventListener("input", function () {
            let discountAmtRegex = /^[0-9.]+$/;
            if (discountAmtInput.value == "") {
                discountAmtError.innerText = "Enter Discount Amount";
                discountCheckboxEnable = 0;
            }
            else if (!discountAmtInput.value.match(discountAmtRegex)) {
                discountAmtInput.value = "";
                discountAmtError.innerText = "Discount Amount can have only numbers";
                discountCheckboxEnable = 0;
            }
            else if (discountAmtInput.value > 100) {
                discountAmtError.innerText = "Discount cannot be more than 100%";
                discountCheckboxEnable = 0;
            }
            else {
                discountAmtError.innerText = "";
                discountCheckboxEnable = 1;
                sessionStorage.setItem("Discount Amount", discountAmtInput.value);
            }
        });

    }
    else {
        discountAmt.style.display = "none";
        discountCheckboxEnable = 1;
        sessionStorage.setItem("discountAmtDiv", "false");
        discountVisible = 0;
    }
});


// Add Item Btn
let addItemBtn = document.getElementById("addItemBtn");
let invoiceNumber = 0;

addItemBtn.addEventListener("click", function () {
    // let invoiceDate = document.getElementById('issuedDateInput');
    // console.log(invoiceDate.value == '');

    if (companyInputCorrect == 0 || clientInputCorrect == 0 || descriptionInputCorrect == 0 || amountInputCorrect == 0) {

        if (companyInputCorrect == 0) {
            companyError.innerText = "Enter your company name";
        }

        if (clientInputCorrect == 0) {
            clientError.innerText = "Enter client name";
        }

        if (descriptionInputCorrect == 0) {
            descriptionError.innerText = "Enter description";
        }

        if (amountInputCorrect == 0) {
            amountError.innerText = "Enter amount";
        }

        // if (discountVisible != 0) {

        //     if (discountCheckboxEnable == 0) {
        //         discountAmtError.innerText = "Enter correct discount amount";
        //     }
        //     else {
        //         discountAmtError.innerText = "";
        //     }
        // }

        // if (issuedDateCorrect == 0) {
        //     issuedDateError.innerText = "Invalid issue date";
        // }

        // if (dueDateInputCorrect == 0) {
        //     dueDateError.innerText = "Invalid due date";
        // }
    }
    else {
        alert("valid data");
        invoiceNumber = 1;
        sessionStorage.setItem("invoiceNumber", "1");
        sessionStorage.setItem("Company Name", companyInput.value);
        sessionStorage.setItem("Client Name", clientInput.value);
        sessionStorage.setItem("Description", descriptionInput.value);
        sessionStorage.setItem("Amount", amountInput.value);
        sessionStorage.setItem("Discount Amount", discountAmtInput.value);
        createBill();
        companyInput.value = "";
        clientInput.value = "";
        descriptionInput.value = "";
        amountInput.value = "";
        discountAmtInput.value = "";
    }
});


// settings popup 
let settings = document.getElementById("settings");
let settingsPopup = document.getElementById("settingsPopup");
settings.addEventListener("click", function () {
    settingsPopup.style.display = "block";
    body.classList.add("bodyScroll");
    invoiceForm.style.opacity = "0.6";
    invoicePreview.style.opacity = "0.6";
    invoiceForm.style.pointerEvents = "none";
    invoicePreview.style.pointerEvents = "none";
});

let settingsCross = document.getElementById("settingsCross")
settingsCross.addEventListener("click", function () {
    settingsPopup.style.display = "none";
    body.classList.remove("bodyScroll");
    // body.style.backgroundColor = "#f9fafb";
    invoiceForm.style.opacity = "1";
    invoicePreview.style.opacity = "1";
    invoiceForm.style.pointerEvents = "all";
    invoicePreview.style.pointerEvents = "all";
});


// generating invoice bill in preview
let createBill = function () {
    let invoiceGenerate = document.getElementById("invoiceGenerate");
    let noInvoice = document.getElementById("noInvoice");

    let company = sessionStorage.getItem("Company Name") || companyInput.value;
    let client = sessionStorage.getItem("Client Name") || clientInput.value;
    let description = sessionStorage.getItem("Description") || descriptionInput.value;
    let amount = sessionStorage.getItem("Amount") || amountInput.value;
    let discount = sessionStorage.getItem("Discount Amount") || discountAmtInput.value;

    let discountText = (+discount == 0 || discount === "") ? 0 : discount;

    let discountTextAmt = (discountText == 0) ? 0 : (amount * discountText) / 100;
    let totalAmt = (+amount - discountTextAmt).toFixed(2);

    let billGenerate = ` <div>
    <div id="invoiceGenerate" class="mt-4">
                            <div id="companyNameMain">
                                <span class="fw-bold fs-4">INVOICE</span>

                                <div id="companyName" class="d-flex justify-content-between align-items-start my-3">

                                    <!-- Your company name -->
                                    <div class="">
                                        <div>
                                            <div class="fw-semibold">Your Company Name</div>
                                            <span id="yourCompanyName">${company}</span>
                                        </div>

                                        <div class="mt-5">
                                            <div class="fw-semibold">Bill To - </div>
                                            <span id="billTO">${client}</span>
                                        </div>
                                    </div>

                                    <div id="dates">
                                        <div class="fw-semibold">
                                            Invoice#: INV-
                                            <span id="invoiceId">2025-04-15</span>
                                        </div>
                                        <div>
                                            Issued Date -
                                            <span id="issuedDate"> 15-04-2025</span>
                                        </div>
                                        <div>
                                            Due Date
                                            <span id="dueDate">20-04-2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="descriptionMain" class="d-flex align-items-center justify-content-between">
                                <div id="description">
                                    <h6>Description</h6>
                                    <div id="itemName">${description}</div>
                                    <div>Discount
                                        <span id="discountMain">(${discountText}%)</span>
                                    </div>
                                </div>

                                <div id="amount">
                                    Amount
                                    <div>
                                        <i class="fa-regular fa-indian-rupee-sign"></i>
                                        <span id="itemAmt">${amount}</span>
                                    </div>

                                    <div>
                                        <span>-</span>
                                        <i class="fa-regular fa-indian-rupee-sign"></i>
                                        <span id="discountAmt">${discountTextAmt}</span>
                                    </div>
                                </div>
                            </div>

                            <div id="totalMain" class="d-flex align-items-center justify-content-between mt-3">
                                <div></div>

                                <div class="d-flex align-items-center justify-content-between gap-5">
                                    Total
                                    <div>
                                        <i class="fa-regular fa-indian-rupee-sign"></i>
                                        <span id="totalAmt">${totalAmt}</span>
                                    </div>
                                </div>

                            </div>

                            <div id="thankYou">Thank You for Your business</div>

                            <div class="mt-2" id="thankYou">Payment terms : Net 15 days</div>
                            </div>
                           
                            <div id="clearAll"></div>
                        </div>
                        </div>`;


    if (invoiceNumber == 1) {
        noInvoice.style.display = "none";
        let newBill = document.createElement("div");
        newBill.innerHTML = billGenerate;
        invoicePreview.appendChild(newBill);
    }
    else {
        noInvoice.style.display = "block";
    }
}

// get the items on reload
window.onload = () => {
    let getDiscountAmtDIv = sessionStorage.getItem("discountAmtDiv");


    //     if (sessionStorage.getItem("Client Name") != "") {
    //         clientInput.value = sessionStorage.getItem("Client Name");
    //         clientInputCorrect = 1;
    //     }

    //     if (sessionStorage.getItem("Description") != "") {
    //         descriptionInput.value = sessionStorage.getItem("Description");
    //         descriptionError = 1;
    //     }

    //     if (sessionStorage.getItem("Amount") != "") {
    //         amountInput.value = sessionStorage.getItem("Amount");
    //         amountError = 1;
    //     }

    //     if (sessionStorage.getItem("Discount Amount") != "") {
    //         discountAmtInput.value = sessionStorage.getItem("Discount Amount");
    //         discountAmtError = 1;
    //     }

    // Discount Amt Field Toggle
    if (getDiscountAmtDIv == "true") {
        discountCheckbox.checked = true;
        discountAmt.style.display = "block";
    }
    else {
        discountCheckbox.checked = false;
        discountAmt.style.display = "none";
    }

    // Theme
    if (sessionStorage.getItem("Theme") === "Light") {
        lightThemeFunc();
    }
    else if (sessionStorage.getItem("Theme") === "Dark") {
        darkThemeFunc();
    }

    // getting the bill
    // invoiceNumber = +sessionStorage.getItem("invoiceNumber") || 0;
    if (sessionStorage.getItem("Company Name") !== "") {
        createBill();
    }
}

// settings
let saveSettingsBtn = document.getElementById("saveSettingsBtn");
let currencySelect = document.getElementById("currencySelect");
let IndianRupee = document.getElementById("IndianRupee");
let usDollar = document.getElementById("usDollar");
let euro = document.getElementById("euro");

function changeCurrency() {
    let currencyValue = currencySelect.value;

    if (currencyValue == "IndianRupee") {
        alert("Currency Changed to Indian Rupees");
        IndianRupee.style.display = "block";
        usDollar.style.display = "none";
        euro.style.display = "none";
    }
    else if (currencyValue == "usDollar") {
        alert("Currency Changed to US Dollar");
        IndianRupee.style.display = "none";
        usDollar.style.display = "block";
        euro.style.display = "none";
    }
    else if (currencyValue == "euro") {
        alert("Currency Changed to Euro");
        IndianRupee.style.display = "none";
        usDollar.style.display = "none";
        euro.style.display = "block";
    }
};

let nav = document.getElementById("nav");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let indigo = document.getElementById("indigo");

blue.addEventListener("click", function () {
    alert("Theme changed to blue");
    nav.style.background = "#25CEEE";
    sessionStorage.setItem("Theme", "blue");
});

orange.addEventListener("click", function () {
    alert("Theme changed to Orange");
    nav.style.background = "#FB9E4F";
    sessionStorage.setItem("Theme", "orange");
});

indigo.addEventListener("click", function () {
    alert("Theme changed to Indigo");
    nav.style.background = "#8892F7";
    sessionStorage.setItem("Theme", "indigo");
});

saveSettingsBtn.addEventListener("click", function () {
    changeCurrency();
});

// getting currentTheme on page reload;
function themeFunction() {
    const currentTheme = sessionStorage.getItem("Theme");
    if (currentTheme == "blue") {
        nav.style.background = "#25CEEE";
    }
    else if (currentTheme == "orange") {
        nav.style.background = "#FB9E4F";
    }
    else if (currentTheme == "indigo") {
        nav.style.background = "#8892F7";
    }
};

themeFunction();