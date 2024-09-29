const ageCalculate () => {
const today = new Date();
const inputDate = new Date(document.getElementById ("date-input").value);

const birthDetails = {
  date : inputDate.getDate();
  month: inputDate.getMonth()
}
};
document.getElementById("clc-btn").addEventListener("click", ageCalculate)