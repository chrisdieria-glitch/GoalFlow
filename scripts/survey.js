// Track selected items
let selectedInterests = new Set();
let selectedWeaknesses = new Set();
let selectedStrengths = new Set();

function seleccionar(id) {
    const elemento = document.getElementById(id);
    elemento.classList.toggle("seleccionado");

    // Track selections for progress calculation
    if (elemento.classList.contains('interes')) {

        if (elemento.classList.contains('seleccionado')) {
            if (selectedInterests.size < 3) {
                selectedInterests.add(id);
            } else {
                // Deselect the last selected interest if more than 3 are selected
                const lastSelected = Array.from(selectedInterests).pop();
                document.getElementById(lastSelected).classList.remove('seleccionado');
                selectedInterests.delete(lastSelected);
                selectedInterests.add(id);
            }
        } else {
            selectedInterests.delete(id);
        }
    } else if (elemento.classList.contains('weakness')) {
        if (elemento.classList.contains('seleccionado')) {
            selectedWeaknesses.add(id);
        } else {
            selectedWeaknesses.delete(id);
        }
    } else if (elemento.classList.contains('strength')) {
        if (elemento.classList.contains('seleccionado')) {
            selectedStrengths.add(id);
        } else {
            selectedStrengths.delete(id);
        }
    }

    updateProgress();
}

// Calculate and update progress bar
function updateProgress() {
    const totalSections = 4; // Personal info, interests, weaknesses, strengths
    let completedSections = 0;

    // Check personal info
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    const gender = document.getElementById('gender').value;
    const freeHours = document.getElementById('free-hours').value;

    if (age && profession && gender && freeHours) {
        completedSections++;
    }

    // Check interests (at least one selected)
    if (selectedInterests.size > 0) {
        completedSections++;
    }

    // Check weaknesses (at least one selected)
    if (selectedWeaknesses.size > 0) {
        completedSections++;
    }

    // Check strengths (at least one selected)
    if (selectedStrengths.size > 0) {
        completedSections++;
    }

    const progress = (completedSections / totalSections) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Add form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.submit-btn');

    // Add input event listeners for real-time progress updates
    document.getElementById('age').addEventListener('change', updateProgress);
    document.getElementById('profession').addEventListener('change', updateProgress);
    document.getElementById('gender').addEventListener('change', updateProgress);
    document.getElementById('free-hours').addEventListener('input', updateProgress);

    // Form submission with loading state
    form.addEventListener('submit', function(e) {
        // Basic validation
        if (selectedInterests.size === 0) {
            alert('Please select at least one interest.');
            e.preventDefault();
            return;
        }

        if (selectedWeaknesses.size === 0) {
            alert('Please select at least one weakness.');
            e.preventDefault();
            return;
        }

        if (selectedStrengths.size === 0) {
            alert('Please select at least one strength.');
            e.preventDefault();
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Submitting...';

        // In a real app, you might want to prevent default and handle async submission
        // For now, let the form submit normally
    });

    // Add keyboard navigation for boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                seleccionar(this.id);
            }
        });
        box.setAttribute('tabindex', '0');
    });

    // Initialize progress
    updateProgress();
});