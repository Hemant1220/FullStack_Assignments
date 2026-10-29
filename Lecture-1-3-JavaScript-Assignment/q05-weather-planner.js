// Q5: Weather Activity Planner
const temperature = 24;
const isRaining = false;
const windSpeed = 12;
let advice;
if (isRaining) advice = "Stay indoors with hot coffee.";
else if (temperature > 35) advice = "Go swimming.";
else if (temperature < 15 && windSpeed > 20) advice = "Too cold and windy — stay home.";
else if (!isRaining && temperature >= 15 && temperature <= 35 && windSpeed <= 20) advice = "Perfect day for a walk.";
else advice = "Check the weather conditions before planning an activity.";
console.log(advice);