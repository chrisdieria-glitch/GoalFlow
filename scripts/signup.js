const button = document.querySelector(".signup-card");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("signedup", JSON.stringify(true));;
  window.location.href = "pages/survey.html";
  const user = document.getElementById("email").value;
  localStorage.setItem("user", JSON.stringify(user));
});

const signedup = JSON.parse(localStorage.getItem("signedup"));
const user = JSON.parse(localStorage.getItem("user"));


if (user == "chrisdieria@gmail.com") {}

else if (signedup == true) {
  window.location.href = "pages/home.html";
}
