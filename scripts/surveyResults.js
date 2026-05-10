const button = document.querySelector(".btn")

button.addEventListener("click", ()=> {
    window.location.href = "home.html"
});

const habits = JSON.parse(localStorage.getItem("surveyHabits"));
const containerOfHabits= document.querySelector(".habits");
const selectedWeaknesses = JSON.parse(localStorage.getItem("selectedWeaknesses"));
const selectedStrengths = JSON.parse(localStorage.getItem("selectedStrengths"));
const containerOfAdvices = document.querySelector(".list");

habits.forEach(habit => {
    const habitElement = document.createElement("div");
    habitElement.classList.add("habit");
    habitElement.innerHTML = `
        <p>${habit}</p>
    `;
    containerOfHabits.appendChild(habitElement);
});

selectedWeaknesses.forEach(weakness => {
    const weaknessElement = document.createElement("li");
    weaknessElement.classList.add("list-item");
    weaknessElement.innerHTML = weakness;
    containerOfAdvices.appendChild(weaknessElement);
});

selectedStrengths.forEach(strength => {
    const strengthElement = document.createElement("li");
    strengthElement.classList.add("list-item");
    strengthElement.innerHTML = strength;
    containerOfAdvices.appendChild(strengthElement);
});