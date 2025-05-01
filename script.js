// Accessing form and suggested plan div
const planForm = document.getElementById('planForm');
const suggestedPlan = document.getElementById('suggestedPlan');
const dietPlan = document.getElementById('dietPlan');
const exercisePlan = document.getElementById('exercisePlan');

// Function to generate plan based on user input
planForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const goal = document.getElementById('goal').value;
  const activityLevel = document.getElementById('activity-level').value;

  // Simulated content for suggested diet and exercise plans
  let suggestedDiet = '';
  let suggestedExercise = '';

  // Generate content based on user preferences (this is a simple example)
  if (goal === 'weight-loss') {
    suggestedDiet = 'Suggested Diet for Weight Loss: Include more vegetables, lean proteins, and reduce calorie intake.';
    suggestedExercise = 'Suggested Exercise for Weight Loss: Cardiovascular exercises like running, cycling, or swimming.';
  } else if (goal === 'muscle-gain') {
    suggestedDiet = 'Suggested Diet for Muscle Gain: Increase protein intake, eat frequent meals, and include strength training.';
    suggestedExercise = 'Suggested Exercise for Muscle Gain: Focus on strength training, weightlifting, and compound exercises.';
  } else if (goal === 'general-fitness') {
    suggestedDiet = 'Suggested Balanced Diet: Incorporate a balanced mix of macronutrients and micronutrients.';
    suggestedExercise = 'Suggested Exercise for General Fitness: Include a mix of cardiovascular exercises and strength training.';
  }

  // Display the generated content
  dietPlan.innerHTML = `<p>${suggestedDiet}</p>`;
  exercisePlan.innerHTML = `<p>${suggestedExercise}</p>`;

  // Show the suggested plan section
  suggestedPlan.classList.remove('hidden');
});