const inputSearchDOM = document.getElementById("inputSearch");
const inputColorDOM = document.getElementById("inputColor");
const modalDOM = document.getElementById("modalColor");
const url = "https://www.google.com/search?client=firefox-b-lm&q=";
let state = true;

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    let search = url + inputSearchDOM.value;
    window.open(search);
  }
});

inputColorDOM.addEventListener("change", () => {
  document.body.style.backgroundColor = inputColorDOM.value;
  state = false;

  hideAndShowModal();
});

const search = () => {
  let search = url + inputSearchDOM.value;
  window.open(search);
};

const hideAndShowModal = () => {
  if (state) {
    modalDOM.classList.replace("hide", "show");
    state = false;
  } else {
    modalDOM.classList.replace("show", "hide");
    state = true;
  }
};
