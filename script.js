function calculate() {
  // Get input values
  var days = parseInt(document.getElementById('days').value) || 0;
  var months = parseInt(document.getElementById('months').value) || 0;
  var years = parseInt(document.getElementById('years').value) || 0;

  // Get selected unit
  var unit = document.querySelector('input[name="unit"]:checked').value;

  // Perform calculations
  var litersOfWater = calculateLitersOfWater(days, months, years, unit);
  var kgOfGrain = calculateKgOfGrain(days, months, years, unit);
  var sqmOfForestedLand = calculateSqmOfForestedLand(days, months, years, unit);
  var kgCO2 = calculateKgCO2(days, months, years, unit);
  var animalLives = calculateAnimalLives(days, months, years, unit);

  // Display the results
  var output = "Results: <br>" +
    "Liters of Water: " + litersOfWater + "<br>" +
    "Kg of Grain: " + kgOfGrain + "<br>" +
    "Square meters of Forested Land: " + sqmOfForestedLand + "<br>" +
    "Kg of CO2: " + kgCO2 + "<br>" +
    "Animal Lives: " + animalLives;

  document.getElementById('output').innerHTML = output;
}

function calculateLitersOfWater(days, months, years, unit) {
  var totalDays = days + months * 30 + years * 365;
  return unit === 'metric' ? 4164 * totalDays : 4164 * totalDays * 0.264172; // Convert liters to gallons for imperial
}

function calculateKgOfGrain(days, months, years, unit) {
  var totalDays = days + months * 30 + years * 365;
  return unit === 'metric' ? 18 * totalDays : 18 * totalDays * 2.20462; // Convert kg to lbs for imperial
}

function calculateSqmOfForestedLand(days, months, years, unit) {
  var totalDays = days + months * 30 + years * 365;
  return unit === 'metric' ? 3 * totalDays : 3 * totalDays * 10.7639; // Convert square meters to square feet for imperial
}

function calculateKgCO2(days, months, years, unit) {
  var totalDays = days + months * 30 + years * 365;
  return unit === 'metric' ? 9 * totalDays : 9 * totalDays * 2.20462; // Convert kg to lbs for imperial
}

function calculateAnimalLives(days, months, years, unit) {
  var totalDays = days + months * 30 + years * 365;
  return 0.22 * totalDays; // No unit conversion needed for animal lives
}
