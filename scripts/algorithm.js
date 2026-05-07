const btnLearn = document.getElementById("learn");
const btnDiscipline = document.getElementById("discipline");
const btnCareer = document.getElementById("career");
const btnHealth = document.getElementById("health");
const btnRelationships = document.getElementById("relationships");
const btnTravel= document.getElementById("travel");
const btnPeaceOfMind = document.getElementById("peace-of-mind");
const btnHappiness = document.getElementById("happiness");
const btnIndependence = document.getElementById("independence");

let selectGoals = [];

btnLearn.addEventListener("click", () => {
  if (selectGoals.length < 3) { 
    selectGoals.push(learning);
  }
});

btnDiscipline.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(discipline);
  }
});

btnCareer.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(career);
  }
});

btnHealth.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(health);
  }
});

btnRelationships.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(relationships);
  }
});

btnTravel.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(travel);
  }
});

btnPeaceOfMind.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(peaceOfMind);
  }
});

btnHappiness.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(happiness);
  }
});

btnIndependence.addEventListener("click", () => {
  if (selectGoals.length < 3) {
    selectGoals.push(independence);
  }
});   

console.log(selectGoals)

const career = [
  ["Practice a career skill daily",1],
  ["Work on a small project or improvement daily",2]
];

const health = [
  ["Do physical exercise daily",2],
  ["Sleep well and maintain a consistent schedule daily"]
];

const discipline = [
  ["Follow your planned daily routine"],
  ["Complete your daily to-do list"]
];

const travel = [
  ["Save a small amount for travel daily"],
  ["Learn or research about a destination daily"]
]

const relationships = [
  ["Spend quality time or meaningful interaction daily",2],
  ["Communicate with someone daily",2]
]

const independence = [
  ["Handle a personal responsibility daily",2],
  ["Practice a self-sufficiency task daily",2]
]

const learning = [
  ["Study without distractions",2],
  ["Apply what you learn in a mini project",2]
];

const peaceOfMind = [
  ["Reduce social media usage",2],
  ["Meditate or journal thoughts",1]
];

const happiness = [
  ["Help someone no matter who",2],
  ["Practice gratitude (write 3 positive things daily)",1]
];

let habits = [];

let time = 8;

function selectHabits() {
  habits = []
  if (time <6) {
    for (let goals of selectGoals) {
      if (goals[0][1] == 1) {
          habits.push([goals[0][0],5])
        }
      else if (goals[0][1] == 2) {
          habits.push([goals[0][0],10])
      }
      else {
        habits.push([goals[0][0]])
      }
    }
  }
  if (time >= 6) {
    for (let goals of selectGoals) {
      for (let habit of goals) {
        if (habit[1] == 1) {
            habits.push([habit[0],5])
        }
        else if (habit[1] == 2) {
            habits.push([habit[0],10])
        }
      }
    }
  }
  return habits
}

console.log(selectHabits())