
const button = document.querySelector(".signup-card");

button.addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("signedUp", "true");
  window.location.href = "survey.html";
});