// Tab Switching
const tabs = document.querySelectorAll(".tabs button");
const tools = document.querySelectorAll(".tool");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active-tab"));
    tools.forEach(tool => tool.classList.remove("active"));

    tab.classList.add("active-tab");
    tools[index].classList.add("active");
  });
});

// Conversions
const conversions = {
  kgToLbs: (kg) => (kg * 2.20462).toFixed(2),
  lbsToKg: (lbs) => (lbs / 2.20462).toFixed(2),
  cToF: (c) => ((c * 9) / 5 + 32).toFixed(2),
  fToC: (f) => (((f - 32) * 5) / 9).toFixed(2),
  mToMiles: (m) => (m / 1609.34).toFixed(2),
  milesToM: (miles) => (miles * 1609.34).toFixed(2),
};

document.getElementById("convertToLbs").addEventListener("click", () => {
  const kg = parseFloat(document.getElementById("kgInput").value);
  document.getElementById("lbsOutput").textContent = `Pounds: ${conversions.kgToLbs(kg)}`;
});

document.getElementById("convertToKg").addEventListener("click", () => {
  const lbs = parseFloat(document.getElementById("lbsInput").value);
  document.getElementById("kgOutput").textContent = `Kilograms: ${conversions.lbsToKg(lbs)}`;
});

document.getElementById("convertToFahrenheit").addEventListener("click", () => {
  const c = parseFloat(document.getElementById("celsiusInput").value);
  document.getElementById("fahrenheitOutput").textContent = `Fahrenheit: ${conversions.cToF(c)}`;
});

document.getElementById("convertToCelsius").addEventListener("click", () => {
  const f = parseFloat(document.getElementById("fahrenheitInput").value);
  document.getElementById("celsiusOutput").textContent = `Celsius: ${conversions.fToC(f)}`;
});

document.getElementById("convertToMiles").addEventListener("click", () => {
  const meters = parseFloat(document.getElementById("metersInput").value);
  document.getElementById("milesOutput").textContent = `Miles: ${conversions.mToMiles(meters)}`;
});

document.getElementById("convertToMeters").addEventListener("click", () => {
  const miles = parseFloat(document.getElementById("milesInput").value);
  document.getElementById("metersOutput").textContent = `Meters: ${conversions.milesToM(miles)}`;
});

// Calculator
const calcScreen = document.getElementById("calcScreen");
let currentCalc = "";

document.querySelectorAll(".calc-buttons .btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "=") {
      try {
        currentCalc = eval(currentCalc) || "";
      } catch {
        currentCalc = "Error";
      }
    } else if (value === "C") {
      currentCalc = "";
    } else {
      currentCalc += value;
    }

    calcScreen.value = currentCalc;
  });
});
