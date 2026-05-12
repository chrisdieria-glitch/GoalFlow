const button = document.querySelector(".signup-card");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("signedup", JSON.stringify(true));;
  window.location.href = "pages/survey.html";
});

const signedup = JSON.parse(localStorage.getItem("signedup"));

// if (signedup == true) {
//   window.location.href = "pages/home.html";
// }