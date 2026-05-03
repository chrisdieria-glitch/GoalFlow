const habitChecklist = document.querySelector('.habit-checklist');
const bar = document.querySelector('.bar');
const percentageText = document.querySelector('.porcentaje');
const addHabitBtn = document.querySelector('.add-habit');
const newHabitInput = document.getElementById('new-habit');

// Load habits from localStorage
let habits = JSON.parse(localStorage.getItem('habits')) || [
    'Drink 8 glasses of water daily',
    'Exercise for 30 minutes daily',
    'Read for 20 minutes daily'
];

// Save habits to localStorage
function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Render habits
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
            localStorage.setItem(`habit-${index}`, completed);
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

// Add new habit
addHabitBtn.addEventListener('click', () => {
    const newHabit = newHabitInput.value.trim();
    if (newHabit) {
        habits.push(newHabit);
        saveHabits();
        renderHabits();
        newHabitInput.value = '';
    }
});

// Initial render
renderHabits();

