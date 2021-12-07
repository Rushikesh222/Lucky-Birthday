const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-Box");
function comapreValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky 🚀";
  } else {
    outputBox.innerText = "Your birthday not  is lucky 🤨";
  }
}
function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  comapreValues(sum, luckyNumber.value);
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}
checkNumberBtn.addEventListener("click", checkBirthDateIsLucky);
