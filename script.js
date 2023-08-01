const subscribeBtn = document.querySelector("[data-subscribe-btn]");
const dismissBtn = document.querySelector("[data-dismiss-btn]");
const mainContainer = document.querySelector("[data-main-container]");
const successContainer = document.querySelector("[data-success-container]");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  mainContainer.hidden = true;
  successContainer.hidden = false;
});

dismissBtn.addEventListener("click", (e) => {
  mainContainer.hidden = false;
  successContainer.hidden = true;
});
