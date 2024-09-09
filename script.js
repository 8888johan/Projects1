document.getElementById('exercise-form').addEventListener('submit', addExercise);

function addExercise(e) {
  e.preventDefault();

  const exercise = document.getElementById('exercise').value;
  const duration = document.getElementById('duration').value;

  if (exercise && duration) {
    const li = document.createElement('li');
    li.textContent = `${exercise} - ${duration} minutes`;

    document.getElementById('exercise-list').appendChild(li);

    // Reset the form
    document.getElementById('exercise').value = '';
    document.getElementById('duration').value = '';
  }
}
