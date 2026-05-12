const container = document.querySelector('.container');
const habitChecklist = document.querySelector('.habit-checklist');
const bar = document.querySelector('.bar');
const percentageText = document.querySelector('.porcentaje');
const addHabitBtn = document.querySelector('.add-habit');
const newHabitInput = document.getElementById('new-habit');

let editMode = false;
let longPressTimer = null;
let longPressTriggered = false;

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
            if (editMode) return;
            button.classList.toggle('completed');
            const completed = button.classList.contains('completed');
            localStorage.setItem(`habit-${index}`, completed ? 'true' : 'false');
            updateProgress();
        });

        const actions = document.createElement('div');
        actions.className = 'habit-item-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'habit-action-btn edit-btn';
        editBtn.type = 'button';
        editBtn.title = 'Edit habit';
        editBtn.textContent = '✏️';
        editBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            const updatedHabit = prompt('Edita el nombre del hábito:', habit);
            if (updatedHabit !== null) {
                const trimmed = updatedHabit.trim();
                if (trimmed) {
                    habits[index] = trimmed;
                    saveHabits();
                    renderHabits();
                }
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'habit-action-btn delete-btn';
        deleteBtn.type = 'button';
        deleteBtn.title = 'Delete habit';
        deleteBtn.textContent = '🗑️';
        deleteBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            habits.splice(index, 1);
            saveHabits();
            renderHabits();
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        const wrapper = document.createElement('div');
        wrapper.className = 'habit-item-container';
        if (editMode) wrapper.classList.add('edit-active');
        wrapper.appendChild(button);
        wrapper.appendChild(actions);
        habitChecklist.appendChild(wrapper);
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

function setEditMode(enabled) {
    editMode = enabled;
    const items = document.querySelectorAll('.habit-item-container');
    items.forEach((item) => {
        item.classList.toggle('edit-active', editMode);
    });
}

container.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button, input, a, textarea, select')) {
        return;
    }
    longPressTriggered = false;
    longPressTimer = setTimeout(() => {
        longPressTriggered = true;
        setEditMode(!editMode);
    }, 2000);
});

container.addEventListener('pointerup', (event) => {
    clearTimeout(longPressTimer);
    if (longPressTriggered) {
        longPressTriggered = false;
        return;
    }
    const interactive = event.target.closest('.habit-action-btn, .add-habit, .view-progress, #new-habit, a, input, button');
    if (editMode && !interactive) {
        setEditMode(false);
    }
});

container.addEventListener('pointerleave', () => {
    clearTimeout(longPressTimer);
});

renderHabits();
