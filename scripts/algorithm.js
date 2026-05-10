
// Buttons of goals, which are used in the survey to determine the habits to do based on the user's goals

const btnLearn = document.getElementById("learn");
const btnDiscipline = document.getElementById("discipline");
const btnCareer = document.getElementById("career");
const btnHealth = document.getElementById("health");
const btnRelationships = document.getElementById("relationships");
const btnTravel= document.getElementById("travel");
const btnPeaceOfMind = document.getElementById("peace-of-mind");
const btnHappiness = document.getElementById("happiness");
const btnIndependence = document.getElementById("independence");

// Habits for each goal, with the time they take in minutes if they are time-based habits

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

let selectGoals = [];

// Event listeners for the buttons, which add the habits of the goal to the selectGoals array if there are less than 3 goals selected

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

// Function that selects the habits to do based on the free time the user has, which is obtained from the survey, and returns an array with the habits to do in a string format, including the time they take if they are time-based habits

function selectHabits() {
  const time = document.getElementById("free-hours").value;
  let habits = []
  let habitsToDo = []
  if (time <= 3 ) {
    for (let goals of selectGoals) {
      if (goals[0][1] == 1) {
          habits.push([goals[0][0],10])
        }
      else if (goals[0][1] == 2) {
          habits.push([goals[0][0],15])
      }
      else {
        habits.push([goals[0][0]])
      }
    }
  }
  else if (time > 3 && time < 6) {
    for (let goals of selectGoals) {
      for (let habit of goals) {
        if (habit[1] == 1) {
            habits.push([habit[0],10])
        }
        else if (habit[1] == 2) {
            habits.push([habit[0],15])
        }
        else {
          habits.push([habit[0]])
        }
      }
    }
  }
  for (let habit of habits) {
    if (habit[1] !== undefined) {
      habitsToDo.push(`${habit[0]} for ${habit[1]} minutes`);
    }
    else {
      habitsToDo.push(`${habit[0]}`);
    }
  }
  return habitsToDo;
}

// Buttons of weaknesses and strengths, which are used in the survey to determine the advices based on the user's weaknesses and strengths

// Weaknesses

const btnFlashStarter = document.getElementById("flash_starter");
const btnInconsistent = document.getElementById("inconsistent");
const btnPerfectionBlocked = document.getElementById("perfection_blocked");
const btnMotivationDependent = document.getElementById("motivation_dependent");
const btnEnvironmentBlind = document.getElementById("environment_blind");
const btnOverthinker = document.getElementById("overthinker");
const btnAllOrNothing = document.getElementById("all_or_nothing");
const btnIdentityUnformed = document.getElementById("identity_unformed");

// Strengths

const btnConsistencyBuilder = document.getElementById("consistency_builder");
const btnSystemThinker = document.getElementById("system_thinker");
const btnSelfDisciplined = document.getElementById("self_disciplined");
const btnFocusedExecuter = document.getElementById("focused_executer");
const btnResilient = document.getElementById("resilient");
const btnGoalDriven = document.getElementById("goal_driven");
const btnIdentityBased = document.getElementById("identity_based");
const btnAdaptiveMindset = document.getElementById("adaptive_mindset");

// Advices for each weakness and strength, which are used to determine the advices based on the user's weaknesses and strengths

// weaknesses

const advFlashStarter =
  "Start with very small habits that take less than 5 minutes to do, so you can build momentum and avoid the overwhelm of starting a big habit.";

const advInconsistent =
  "Create a fixed daily schedule and tie habits to specific triggers so your actions become automatic instead of random.";

const advPerfectionBlocked =
  "Focus on progress over perfection by allowing 'imperfect action' so you can build consistency instead of waiting for the perfect moment.";

const advMotivationDependent =
  "Replace motivation with routine by committing to a minimum version of the habit even on low-energy days.";

const advEnvironmentBlind =
  "Redesign your environment to support your habits by removing distractions and placing cues that guide your behavior.";

const advOverthinker =
  "Set a timer and act before overthinking starts by limiting planning time and prioritizing execution over analysis.";

const advAllOrNothing =
  "Adopt a flexible mindset where doing a small version of the habit still counts, preventing total abandonment after mistakes.";

const advIdentityUnformed =
  "Shift your identity by repeating 'I am someone who does this daily' so your actions align with who you believe you are becoming.";


// strengths

const advConsistencyBuilder =
  "Leverage your consistency by turning habits into non-negotiable daily rituals that run on autopilot rather than willpower.";

const advSystemThinker =
  "Use your systems thinking to design habit chains where one action naturally triggers the next like a well-built machine.";

const advSelfDisciplined =
  "Channel your self-discipline into long-term goals by committing to actions even when there is no immediate reward or motivation.";

const advFocusedExecutor =
  "Exploit your execution focus by breaking tasks into clear steps and completing them without switching between distractions.";

const advResilient =
  "Use your resilience to bounce back quickly from setbacks, treating failures as temporary pauses rather than stopping points.";

const advGoalDriven =
  "Direct your goal-driven nature by setting clear milestones and measuring progress regularly to maintain momentum.";

const advIdentityBased =
  "Strengthen your identity-based habits by repeatedly acting in alignment with who you believe you are becoming.";

const advAdaptiveMindset =
  "Use your adaptive mindset to adjust strategies quickly when something isn't working instead of abandoning the goal.";

// List of weaknesses and strenghts selected by the user in the survey, which are used to determine the advices based on the user's weaknesses and strengths

let selectedWeaknesses2 = []
let selectedStrengths2 = [];

// Buttons that add the advices to the list

// Weaknsesses

btnFlashStarter.addEventListener("click", () => {
  selectedWeaknesses2.push(advFlashStarter);
});

btnInconsistent.addEventListener("click", () => {
  selectedWeaknesses2.push(advInconsistent);
});

btnPerfectionBlocked.addEventListener("click", () => {
  selectedWeaknesses2.push(advPerfectionBlocked);
});

btnMotivationDependent.addEventListener("click", () => {
  selectedWeaknesses2.push(advMotivationDependent);
});

btnEnvironmentBlind.addEventListener("click", () => {
  selectedWeaknesses2.push(advEnvironmentBlind);
});

btnOverthinker.addEventListener("click", () => {
  selectedWeaknesses2.push(advOverthinker);
});

btnAllOrNothing.addEventListener("click", () => {
  selectedWeaknesses2.push(advAllOrNothing);
});

btnIdentityUnformed.addEventListener("click", () => {
  selectedWeaknesses2.push(advIdentityUnformed);
});

// Strengths

btnConsistencyBuilder.addEventListener("click", () => {
  selectedStrengths2.push(advConsistencyBuilder);
});

btnSystemThinker.addEventListener ("click", () => {
  selectedStrengths2.push(advSystemThinker);
});

btnSelfDisciplined.addEventListener("click", () => {
  selectedStrengths2.push(advSelfDisciplined);
});

btnFocusedExecuter.addEventListener("click", () => {
  selectedStrengths2.push(advFocusedExecuter);
});

btnResilient.addEventListener("click", () => {
  selectedStrengths2.push(advResilient);
});

btnGoalDriven.addEventListener("click", () => {
  selectedStrengths2.push(advGoalDriven);
});

btnIdentityBased.addEventListener("click", () => {
  selectedStrengths2.push(advIdentityBased);
});

btnAdaptiveMindset.addEventListener("click", () => {
  selectedStrengths2.push(advAdaptiveMindset);
});

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const habitsToDo = selectHabits();
  localStorage.setItem("surveyHabits", JSON.stringify(selectHabits()));
  localStorage.setItem("selectedWeaknesses", JSON.stringify(Array.from(selectedWeaknesses2)));
  localStorage.setItem("selectedStrengths", JSON.stringify(Array.from(selectedStrengths2)));
  window.location.href = "surveyResults.html";
});
