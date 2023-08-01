const subscribeForm = document.querySelector("[data-subscribe-form]");
const dismissBtn = document.querySelector("[data-dismiss-btn]");
const mainContainer = document.querySelector("[data-main-container]");
const successContainer = document.querySelector("[data-success-container]");
const emailInput = document.querySelector("[data-email-input]");
const formError = document.querySelector("[data-form-error");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.validity.valueMissing || emailInput.validity.typeMismatch) {
    formError.textContent = "Valid email required";
    emailInput.classList.add("invalid-input");
  } else {
    mainContainer.hidden = true;
    successContainer.hidden = false;
    emailInput.value = "";
  }
});

emailInput.addEventListener("input", (e) => {
    emailInput.classList.remove("invalid-input")
    formError.textContent = "";
})

dismissBtn.addEventListener("click", (e) => {
  mainContainer.hidden = false;
  successContainer.hidden = true;
});
