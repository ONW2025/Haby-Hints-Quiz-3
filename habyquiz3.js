const quizContainer = document.getElementById('quiz-container');
const questionCounterEl = document.getElementById('question-counter');
const questionElement = document.getElementById('question');
const scoreEl = document.getElementById('score');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const feedbackElement = document.getElementById('feedback');

const quizData = [
  {
    question: "If the vertical velocity is 12 cm/s, how much will the air rise in 1 hour in units of meters?",
    options: ["216 meters", "432 meters", "648 meters", "864 meters"],
    correctAnswer: "432 meters" // Key: 101 - B
  },
  {
    question: "All are displayed on the 1000-mb UNISYS model prog except:",
    options: ["Convergence", "Wind vectors", "Vorticity", "Dewpoint"],
    correctAnswer: "Vorticity" // Key: 102 - C
  },
  {
    question: "(Statement 1) Snow can occur if the 850 mb temperature is 0 C. (Statement 2) Snow can occur when low level warm air advection occurs.",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: 103 - B
  },
  {
    question: "(Statement 1) Downwind from a vorticity maximum is the region of a vort max conducive to upper level divergence and rising air. (Statement 2) The amount of uplift from vorticity advection depends solely on how many units of vorticity the vort max has.",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is true and Statement 2 are false" // Key: 104 - C
  },
  {
    question: "(Statement 1) The initial 850 to 500 mb relative humidity needs to be high in order for thunderstorms to occur. (Statement 2) The 850 to 500 mb relative humidity tends to be high around fronts, low pressure systems and other regions where deep dynamic lifting occurs.",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 are true" // Key: 105 - D
  },
  {
    question: "The LI is an assessment of (in)stability of an air parcel that begins the ascent from:",
    options: [
      "The boundary layer",
      "850 mb",
      "700 mb",
      "500 mb"
    ],
    correctAnswer: "The boundary layer" // Key: 106 - A
  },
  {
    question: "When the 1000 to 500 millibar thicknesses are decreasing over time a forecaster would expect ______(1)_________. The models are best at predicting ______(2)______ precipitation amounts.",
    options: [
      "(1) warm air advection, (2) convectively induced",
      "(1) warm air advection, (2) dynamically induced",
      "(1) cold air advection, (2) convectively induced",
      "(1) cold air advection, (2) dynamically induced"
    ],
    correctAnswer: "(1) cold air advection, (2) dynamically induced" // Key: 107 - D
  },
  {
    question: "The polar jet stream divides _______(1)________. If the wind speeds are much higher on the left side of a trough that trough can be expected to _____(2)______.",
    options: [
      "(1) mid-latitude air from polar air, (2) dig",
      "(1) mid-latitude air from polar air, (2) lift",
      "(1) tropical air from mid-latitude air, (2) dig",
      "(1) tropical air from mid-latitude air, (2) lift"
    ],
    correctAnswer: "(1) mid-latitude air from polar air, (2) dig" // Key: 108 - A
  },
  {
    question: "The net magnitude of vertical velocity over a forecast location depends upon:",
    options: [
      "The magnitude of lifting mechanisms",
      "The magnitude of sinking mechanisms",
      "Both answers above"
    ],
    correctAnswer: "Both answers above" // Key: 109 - C
  },
  {
    question: "This is a forecast model used to help develop 3 to 10 day forecasts:",
    options: ["ETA", "NGM", "AVN", "GFS"],
    correctAnswer: "GFS" // Key: 110 - D
  },
  {
    question: "A downsloping wind is most likely to cause:",
    options: [
      "A cooling of temperature",
      "A warming of temperature",
      "An increased threat for precipitation",
      "An increase in the surface relative humidity"
    ],
    correctAnswer: "A warming of temperature" // Key: 111 - B
  },
  {
    question: "A low pressure system is located over Colorado. Upslope flow would be expected:",
    options: ["North of Colorado", "South of Colorado"],
    correctAnswer: "North of Colorado" // Key: 112 - A
  },
  {
    question: "This is the amount of moisture that would accumulate on the earth's surface if all water vapor aloft was condensed onto the earth's surface and measured.",
    options: [
      "Mixing ratio",
      "Dewpoint",
      "Precipitation accumulation",
      "Precipitable Water"
    ],
    correctAnswer: "Precipitable Water" // Key: 113 - D
  },
  {
    question: "If uplift produces clouds but not precipitation at the surface, a possible reason why no precipitation occurred at the surface is due to the:",
    options: [
      "Uplift not being strong enough",
      "Initial column layer relative humidity not being high enough",
      "The air the precipitation falls into being too dry",
      "All of the above"
    ],
    correctAnswer: "All of the above" // Key: 114 - D
  },
  {
    question: "All the following isopleths will have an S-shaped over the region a strong mid-latitude cyclone influences except:",
    options: ["Isobars", "Thickness lines", "Isotherms", "Isodrosotherms"],
    correctAnswer: "Isobars" // Key: 115 - A
  },
  {
    question: "If colder air and warmer air are advecting toward each other on a constant pressure surface, the air that will lift over the other will be the ____(1)_____ air because the air being lifted is ____(2)____ dense.",
    options: [
      "(1) Warmer, (2) less",
      "(1) Colder, (2) more",
      "(1) Warmer, (2) more",
      "(1) Colder, (2) less"
    ],
    correctAnswer: "(1) Warmer, (2) less" // Key: 116 - A
  },
  {
    question: "Since too many people think a meteorologist studies star charts, meteors, planets and various objects in the solar system and universe, Haby proposes changing the title of meteorologist to:",
    options: ["Climatologist", "Earth scientist", "Weatherologist", "Skyologist"],
    correctAnswer: "Weatherologist" // Key: 117 - C
  },
  {
    question: "While evaporation is a cooling agent, sunshine is a _____(1)_____ agent. If clouds give way to sun, temperatures are likely to _____(2)______ quickly.",
    options: [
      "(1) warming, (2) cool",
      "(1) warming, (2) warm",
      "(1) cooling, (2) cool",
      "(1) cooling, (2) warm"
    ],
    correctAnswer: "(1) warming, (2) warm" // Key: 118 - B
  },
  {
    question: "An increase of longwave radiation absorbed by the earth's surface due to an increase of clouds in the overnight hours will tend to cause the temperature to be _____(1)______ than they otherwise would be. During the day, clouds act as a _____(2)______ agent.",
    options: [
      "(1) cooler, (2) cooling",
      "(1) cooler, (2) warming",
      "(1) warmer, (2) cooling",
      "(1) warmer, (2) warming"
    ],
    correctAnswer: "(1) warmer, (2) cooling" // Key: 119 - C
  },
  {
    question: "(Statement 1) A homogeneous ball has no natural top. (Statement 2) People often associate the direction of up with the direction that is opposite from the gravitational force at the location they are at.",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: 120 - B
  },
  {
    question: "Generally, those that become interested in meteorology from an early age do so because of:",
    options: [
      "The equations and math",
      "The huge salaries of meteorologists",
      "The easy ability to become famous",
      "Storms (winter storms, severe storms, hurricanes, etc.)"
    ],
    correctAnswer: "Storms (winter storms, severe storms, hurricanes, etc.)" // Key: 121 - D
  },
  {
    question: "What is a meteogram:",
    options: [
      "Graph showing wind direction and wind speed with height",
      "A temperature and dewpoint sounding of the troposphere",
      "Graphical model output of various forecasted parameters",
      "A forecasting tool to help predict snowfall"
    ],
    correctAnswer: "Graphical model output of various forecasted parameters" // Key: 122 - C
  },
  {
    question: "(Statement 1) In the standard atmosphere (average temperature at each height in the troposphere) the temperature always decreases with height in the troposphere. (Statement 2) In the troposphere on any given day the temperature always decreases with height.",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is true and Statement 2 are false" // Key: 123 - C
  },
  {
    question: "Hail from a thunderstorm is most likely to reach the surface in _____(1)_______. Hail tends to be _____(2)______ in size once reaching the surface than it was at 700 mb on its ride to the surface.",
    options: [
      "(1) high elevation regions, (2) smaller",
      "(1) high elevation regions, (2) larger",
      "(1) low elevation regions, (2) smaller",
      "(1) low elevation regions, (2) larger"
    ],
    correctAnswer: "(1) high elevation regions, (2) smaller" // Key: 124 - A
  },
  {
    question: "What is a dirty high pressure?",
    options: [
      "A high pressure that produces very hot and dusty weather",
      "A high pressure that has widespread clouds, precipitation and/or fog within its domain",
      "A strong high pressure that stalls over a region for a significant number of days",
      "A high pressure region that increases smog over a city"
    ],
    correctAnswer: "A high pressure that has widespread clouds, precipitation and/or fog within its domain" // Key: 125 - B
  },
  {
    question: "How can a forecaster tell the difference between ridging and an inverted trough?",
    options: [
      "By size",
      "By amplitude",
      "By elevation",
      "By the direction of wind flow"
    ],
    correctAnswer: "By the direction of wind flow" // Key: 126 - D
  },
  {
    question: "Which of the following would most likely cause a trough to become negatively tilted?",
    options: [
      "Strong warm air advection in the lower troposphere",
      "Upper level convergence aloft",
      "Strong jet streak rounding the base of a trough",
      "Strong thunderstorm updrafts"
    ],
    correctAnswer: "Strong jet streak rounding the base of a trough" // Key: 127 - C
  },
  {
    question: "Occluded mid-latitude cyclone systems will generally be _______(1)_______ with height. Strong developing mid-latitude cyclone systems will generally be ______(2)_________ with height.",
    options: [
      "(1) vertically tilted, (2) stacked",
      "(1) stacked, (2) vertically tilted"
    ],
    correctAnswer: "(1) stacked, (2) vertically tilted" // Key: 128 - B
  },
  {
    question: "A katabatic wind is a flow from high toward lower elevations in which the wind coming from the higher elevation is ____(1)______ in temperature than the air it is displacing even though it is sinking adiabatically. A sudden increase in friction will cause the air to be more ____(2)_____.",
    options: [
      "(1) warmer, (2) ageostrophic",
      "(1) warmer, (2) geostrophic",
      "(1) colder, (2) ageostrophic",
      "(1) colder, (2) geostrophic"
    ],
    correctAnswer: "(1) colder, (2) ageostrophic" // Key: 129 - C
  },
  {
    question: "A thermal trough at the surface is a region with relatively:",
    options: [
      "Warmer temperatures",
      "Cooler temperatures",
      "Higher dewpoints",
      "Lower dewpoints"
    ],
    correctAnswer: "Cooler temperatures" // Key: 130 - B
  },
  {
    question: "Which of the following is a characteristic of a shortwave:",
    options: [
      "Larger than a longwave",
      "Anticyclonic curvature",
      "Slower moving than longwaves",
      "Region of sinking air and stability",
      "None of the above"
    ],
    correctAnswer: "None of the above" // Key: 131 - E
  },
  {
    question: "If the central pressure of a low pressure system is rising in pressure it is said to be _____(1)_____. If a trough is becoming less amplified and moving into higher latitudes it is said to be _____(2)_____",
    options: [
      "(1) filling, (2) lifting",
      "(1) filling, (2) digging",
      "(1) deepening, (2) lifting",
      "(1) deepening, (2) digging"
    ],
    correctAnswer: "(1) filling, (2) lifting" // Key: 132 - A
  },
  {
    question: "An outflow boundary is an example of a:",
    options: [
      "Warm front",
      "Cold front",
      "Shear axis",
      "Dryline"
    ],
    correctAnswer: "Dryline" // Key: 133 - C
  },
  {
    question: "This is the retarding force that is responsible for air converging into low pressure systems in the boundary layer:",
    options: [
      "Upward vertical velocity",
      "Gravity",
      "Centrifugal deceleration",
      "Friction"
    ],
    correctAnswer: "Friction" // Key: 134 - D
  },
  {
    question: "What is a \"classic event\"?",
    options: [
      "A situation where the ingredients come together for a particularly noteworthy weather event",
      "It is a particular type of supercell thunderstorm that commonly has tornadoes",
      "A weather event that is very similar to a weather event that occurred in the past",
      "Any weather event that occurs on a global scale such as El Nino"
    ],
    correctAnswer: "A situation where the ingredients come together for a particularly noteworthy weather event" // Key: 135 - A
  },
  {
    question: "What is \"return flow\"?",
    options: [
      "A wind shift back to the south that brings in higher temperatures and dewpoints",
      "A wind shift back to the north that brings in lower temperatures and dewpoints",
      "A flow of air that exits the forecast region and then comes back",
      "A flow of air that is in circles"
    ],
    correctAnswer: "A wind shift back to the south that brings in higher temperatures and dewpoints" // Key: 136 - A
  },
  {
    question: "Which of the following is not a part of the Omega Equation?",
    options: [
      "Differential Vorticity Advection",
      "Land cover and soil moisture boundaries",
      "Thermal Advection"
    ],
    correctAnswer: "Land cover and soil moisture boundaries" // Key: 137 - B
  },
  {
    question: "This is a current state of the troposphere as measured by weather sensors to produce a chart:",
    options: ["Prog", "Model", "Image", "Analysis"],
    correctAnswer: "Analysis" // Key: 138 - D
  },
  {
    question: "A red sky at night in which the western part of the sky is clear and the eastern part of the sky is cloudy means:",
    options: [
      "Better weather, sailor's delight",
      "Approaching bad weather, sailor's warning"
    ],
    correctAnswer: "Better weather, sailor's delight" // Key: 139 - A
  },
  {
    question: "The most critical weather element to not have during the execution of a war when trying to collect intelligence is:",
    options: [
      "Cold surface temperatures",
      "Strong winds",
      "Bad visibility",
      "High surface pressure"
    ],
    correctAnswer: "Bad visibility" // Key: 140 - C
  },
  {
    question: "To make a storm as severe as possible and you can pick three ingredients, of the four choices below which would you not pick?",
    options: [
      "Extreme instability",
      "Strong speed and directional wind shear",
      "Strong dynamic lifting of saturated warm air",
      "Extremely high value of Precipitable Water and saturated air throughout the troposphere"
    ],
    correctAnswer: "Extremely high value of Precipitable Water and saturated air throughout the troposphere" // Key: 141 - D
  },
  {
    question: "(Statement 1) The gravitational field strength around an object depends upon the size of the object. (Statement 2) The gravitational attraction between two bodies decreases as the two bodies are displaced further away from each other.",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: 142 - B
  },
  {
    question: "(1) temperature increase with height, (2) lapse rate between dry and moist adiabatic rate, (3) Layer with a constant temperature with height, (4) Lapse rate a saturated lifting parcel of air takes. Choose the answer in which each definition corresponds to the correct term:",
    options: [
      "(1) isothermal lapse rate, (2) stable lapse rate, (3) inversion, (4) dry adiabatic lapse rate",
      "(1) inversion, (2) conditional instability, (3) isothermal lapse rate, (4) wet adiabatic lapse rate",
      "(1) unstable layer, (2) convective instability, (3) inversion, (4) parcel lapse rate",
      "(1) superadiabatic lapse rate, (2) potential instability, (3) dry adiabatic lapse rate, (4) wet adiabatic lapse rate"
    ],
    correctAnswer: "(1) inversion, (2) conditional instability, (3) isothermal lapse rate, (4) wet adiabatic lapse rate" // Key: 143 - B
  },
  {
    question: "The omega block tends to have cooler weather on the ____(1)_____ side of the omega block due to northerly winds. The weather under the center of an omega block tends to be _____(2)_____",
    options: [
      "(1) left, (2) stormy",
      "(1) left, (2) nice",
      "(1) right, (2) stormy",
      "(1) right, (2) nice"
    ],
    correctAnswer: "(1) right, (2) nice" // Key: 144 - D
  },
  {
    question: "In the ______(1)________ season temperatures cool off most rapidly in the mid-latitudes when comparing the early part of the season to the later part of the season. The noon sun angle is highest in _____(2)_______ summer.",
    options: [
      "(1) fall, (2) early",
      "(1) fall, (2) late",
      "(1) winter, (2) early",
      "(1) winter, (2) late"
    ],
    correctAnswer: "(1) fall, (2) early" // Key: 145 - A
  },
  {
    question: "At the leading edge of outflow boundaries ______(1)________ occurs. Outflow boundaries promote _____(2)______ air as they move along the earth's surface.",
    options: [
      "(1) convergence, (2) sinking",
      "(1) convergence, (2) rising",
      "(1) divergence, (2) sinking",
      "(1) divergence, (2) rising"
    ],
    correctAnswer: "(1) convergence, (2) rising" // Key: 146 - B
  },
  {
    question: "CAPE and LI can be determined from all of the following sources except:",
    options: ["Radar", "Satellite", "Rawinsonde", "Dropsonde"],
    correctAnswer: "Radar" // Key: 147 - A
  },
  {
    question: "The 5,400 meter 1000 to 500 mb thickness generally separates:",
    options: [
      "Arctic air from Polar air",
      "Tropical air from Mid-latitude air",
      "Polar air from Mid-latitude air",
      "Equatorial air from tropical air"
    ],
    correctAnswer: "Polar air from Mid-latitude air" // Key: 148 - C
  },
  {
    question: "For a lifting mechanism, where in the troposphere does a forecaster look for convergence to occur?",
    options: [
      "Surface, boundary layer and lower troposphere",
      "Around the 500 mb level",
      "In the upper troposphere"
    ],
    correctAnswer: "Surface, boundary layer and lower troposphere" // Key: 149 - A
  },
  {
    question: "How does a squall line look at radar?",
    options: [
      "As a region of scattered supercell storms",
      "As a region of light rain",
      "As an elongated band of strong storms",
      "All of the above"
    ],
    correctAnswer: "As an elongated band of strong storms" // Key: 150 - C
  }
];

// Global quiz state variables
let currentQuestion = 0;
let score = 0;           // Overall score (includes second chance successes)
let scoreFirstGuess = 0; // Score counting only first-try correct answers
let hasSecondChance = false;
let shuffledQuizData = [];
const totalQuestions = quizData.length;

// Function to update the displayed score
function updateScore() {
  scoreEl.textContent = `Score: ${score}`;
}

// Fisher-Yates shuffle to randomize an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Update the question counter display (e.g., "Question 3 of 100")
function updateCounter() {
  questionCounterEl.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}

// Load and display the current question from the (randomized) quiz array
function loadQuiz() {
  // When finished, show the final results
  if (currentQuestion >= totalQuestions) {
    const overallPercentage = (score / totalQuestions) * 100;
    const firstGuessPercentage = (scoreFirstGuess / totalQuestions) * 100;
    const passStatusOverall = overallPercentage >= 80 ? "passed" : "failed";
    const passStatusFirstGuess = firstGuessPercentage >= 80 ? "passed" : "failed";
    
    quizContainer.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your overall score (with second chances) is ${score} / ${totalQuestions} (${overallPercentage.toFixed(0)}%). You ${passStatusOverall}!</p>
      <p>Your first guess score is ${scoreFirstGuess} / ${totalQuestions} (${firstGuessPercentage.toFixed(0)}%). You ${passStatusFirstGuess} when only first attempts count.</p>
      <button id="restart-button-final">Restart Quiz</button>
    `;
    // Attach listener to the final restart button.
    document.getElementById('restart-button-final').addEventListener('click', restartQuiz);
    localStorage.removeItem('quizState');
    return;
  }

  updateCounter();
  updateScore();

  const currentQuizItem = shuffledQuizData[currentQuestion];
  questionElement.innerText = currentQuizItem.question;

  // Clear previous options and feedback
  optionsElement.innerHTML = '';
  feedbackElement.innerText = '';

  // Create each option as a label with a radio input
  currentQuizItem.options.forEach(option => {
    const label = document.createElement('label');
    label.style.cursor = 'pointer';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    input.style.marginRight = '10px';

    label.prepend(input);
    label.appendChild(document.createTextNode(option));
    optionsElement.appendChild(label);
  });

  saveProgress();
}

// Check the user's answer when the submit button is clicked
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return; // No option selected
  }
  
  const userAnswer = selectedOption.value;
  const correctAnswer = shuffledQuizData[currentQuestion].correctAnswer;

  if (userAnswer === correctAnswer) {
    feedbackElement.innerText = "Correct!";
    feedbackElement.classList.add("correct");
    feedbackElement.classList.remove("incorrect");
    
    score++; // Increase overall score
    // If the answer is correct on the first try, increase first-guess score
    if (!hasSecondChance) {
      scoreFirstGuess++;
    }
    hasSecondChance = false;
    
    // Pause to let user read the feedback before moving on
    setTimeout(() => {
      currentQuestion++;
      saveProgress();
      loadQuiz();
    }, 1500);
  } else {
    if (!hasSecondChance) {
      feedbackElement.innerText = "Incorrect. Try again.";
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
      hasSecondChance = true;
    } else {
      feedbackElement.innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
      hasSecondChance = false;
      
      setTimeout(() => {
        currentQuestion++;
        saveProgress();
        loadQuiz();
      }, 1500);
    }
  }
  updateScore();
}

// Save the current state (including randomized order and both scores) to localStorage
function saveProgress() {
  const quizState = {
    currentQuestion,
    score,
    scoreFirstGuess,
    hasSecondChance,
    shuffledQuizData
  };
  localStorage.setItem('quizState', JSON.stringify(quizState));
}

// Load saved quiz state from localStorage (if any)
function loadProgress() {
  const savedState = localStorage.getItem('quizState');
  if (savedState) {
    const quizState = JSON.parse(savedState);
    currentQuestion = quizState.currentQuestion;
    score = quizState.score;
    scoreFirstGuess = quizState.scoreFirstGuess;
    hasSecondChance = quizState.hasSecondChance;
    shuffledQuizData = quizState.shuffledQuizData;
  }
}

// Check for saved progress on page load and ask the user if they want to resume
function checkSavedProgress() {
  if (localStorage.getItem('quizState')) {
    const resume = confirm("You have an unfinished quiz. Would you like to resume?");
    if (resume) {
      loadProgress();
    } else {
      localStorage.removeItem('quizState');
      currentQuestion = 0;
      score = 0;
      scoreFirstGuess = 0;
      hasSecondChance = false;
      shuffledQuizData = shuffleArray(quizData.slice());
    }
  } else {
    shuffledQuizData = shuffleArray(quizData.slice());
  }
}

// Restart the quiz from the beginning
function restartQuiz() {
  localStorage.removeItem('quizState');
  currentQuestion = 0;
  score = 0;
  scoreFirstGuess = 0;
  hasSecondChance = false;
  shuffledQuizData = shuffleArray(quizData.slice());
  loadQuiz();
}

// Event listeners for the submit and restart buttons
submitButton.addEventListener('click', checkAnswer);

restartButton.addEventListener('click', () => {
  if (confirm("Are you sure you want to start over? Your current progress will be lost.")) {
    restartQuiz();
  }
});

// On page load, check for saved progress and load the quiz
checkSavedProgress();
loadQuiz();