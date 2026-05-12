const habitChecklist = document.querySelector('.habit-checklist');
const bar = document.querySelector('.bar');
const percentageText = document.querySelector('.porcentaje');
const addHabitBtn = document.querySelector('.add-habit');
const newHabitInput = document.getElementById('new-habit');

// Load habits from surveyHabits and fall back to defaults if needed
let habits = JSON.parse(localStorage.getItem('surveyHabits'));
if (!Array.isArray(habits) || habits.length === 0) {
    habits = [
        'Drink 8 glasses of water daily',
        'Exercise for 30 minutes daily',
        'Read for 20 minutes daily'
    ];
    localStorage.setItem('surveyHabits', JSON.stringify(habits));
}

function saveHabits() {
    localStorage.setItem('surveyHabits', JSON.stringify(habits));
}

function renderHabits() {
    habitChecklist.innerHTML = '';
    habits.forEach((habit, index) => {
        const button = document.createElement('button');
        button.className = 'habit-item';
        button.textContent = habit;
        const isCompleted = localStorage.getItem(`habit-${index}`) === 'true';
        if (isCompleted) {
            button.classList.add('completed');
        }
        button.addEventListener('click', () => {
            button.classList.toggle('completed');
            const completed = button.classList.contains('completed');
            localStorage.setItem(`habit-${index}`, completed ? 'true' : 'false');
            updateProgress();
        });
        habitChecklist.appendChild(button);
    });
    updateProgress();
}

function updateProgress() {
    const habitItems = document.querySelectorAll('.habit-item');
    const completedCount = document.querySelectorAll('.completed').length;
    const totalCount = habitItems.length;
    const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
    bar.style.height = `${progressPercent}%`;
    percentageText.textContent = `${Math.round(progressPercent)}%`;
}

addHabitBtn.addEventListener('click', () => {
    const newHabit = newHabitInput.value.trim();
    if (newHabit) {
        habits.push(newHabit);
        saveHabits();
        renderHabits();
        newHabitInput.value = '';
    }
});

const viewProgressBtn = document.querySelector('.view-progress');
viewProgressBtn.addEventListener('click', () => {
    window.location.href = '../pages/view-progress.html';
});

renderHabits();

const habitItems = document.querySelectorAll('.habit-item');

habitItems.forEach(item => {
});
