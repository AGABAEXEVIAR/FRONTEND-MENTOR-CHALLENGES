const dayError = document.querySelector(".dayerror");
const monthError = document.querySelector(".montherror");
const yearError = document.querySelector(".yearerror");
const yearResult = document.querySelector(".yearresult");
const monthResult = document.querySelector(".monthresult");
const dayResult = document.querySelector(".dayresult");
const submitBtn = document.querySelector(".btn");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const inputRequiredError = "This field is required";
const inputDayError = "Please enter a valid day between 1 and 31";
const inputMonthError = "Please enter a valid month between 1 and 12";
const inputYearError = "Please enter a year in the past";
const canvas = document.querySelector(".can");

function checkDayInput() {
    let value = inputDay.value;
    if (value === "") {
        dayError.innerHTML = inputRequiredError;
        return false;
    } else if (isNaN(value) || value < 1 || value > 31) {
        dayError.innerHTML = inputDayError;
        return false;
    } else {
        dayError.innerHTML = "";
        return true;
    }
}

function checkMonthInput() {
    let value = inputMonth.value;
    if (value === "") {
        monthError.innerHTML = inputRequiredError;
        return false;
    } else if (isNaN(value) || value < 1 || value > 12) {
        monthError.innerHTML = inputMonthError;
        return false;
    } else {
        monthError.innerHTML = "";
        return true;
    }
}

function checkYearInput() {
    let value = inputYear.value;
    let currentYear = new Date().getFullYear();
    if (value === "") {
        yearError.innerHTML = inputRequiredError;
        return false;
    } else if (isNaN(value) || value > currentYear) {
        yearError.innerHTML = inputYearError;
        return false;
    } else {
        yearError.innerHTML = "";
        return true;
    }
}

function calculateAge(birthday) {
    var birthdate = new Date(birthday);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        if (months === 0) {
            months = 11;
        } else {
            months = 12 + months;
        }
        days = 30 + days;
    }
    yearResult.innerHTML = years;
    monthResult.innerHTML = months;
    dayResult.innerHTML = days;
}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();
    if (!day || !month || !year) return;
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
    // Uncomment and fix canvas display code if needed.
    // canvas.style.display = "block";
    // setTimeout(function () {
    //     canvas.style.display = "none";
    // }, 8000);
});

