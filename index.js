const loanAmountInput = document.getElementById('loan-amount');
const loanAmountSlider = document.getElementById('loan-amount-slider');
const loanPeriodInput = document.getElementById('loan-period');
const loanPeriodSlider = document.getElementById('loan-period-slider');
const dailyRepayment = document.getElementById('daily-repayment');
const totalRepayment = document.getElementById('total-repayment');
const calculateButton = document.getElementById('calculate-button');

const interestRate = 2.2;

loanAmountInput.addEventListener('input', function () {
  loanAmountSlider.value = loanAmountInput.value;
  updateRepayment();
});

loanAmountSlider.addEventListener('input', function () {
  loanAmountInput.value = loanAmountSlider.value;
  updateRepayment();
});

loanPeriodInput.addEventListener('input', function () {
  loanPeriodSlider.value = loanPeriodInput.value;
  updateRepayment();
});

loanPeriodSlider.addEventListener('input', function () {
  loanPeriodInput.value = loanPeriodSlider.value;
  updateRepayment();
});

function updateRepayment() {
  const loanAmount = parseFloat(loanAmountInput.value);
  const loanPeriod = parseInt(loanPeriodInput.value);

  if (isNaN(loanAmount) || isNaN(loanPeriod)) {
    dailyRepayment.textContent = '0 грн';
    totalRepayment.textContent = '0 грн';
    calculateButton.disabled = true;
  } else {
    const dailyRepaymentValue = (
      (loanAmount + loanAmount * (interestRate / 100) * loanPeriod) /
      loanPeriod
    ).toFixed(2);
    const totalRepaymentValue = (dailyRepaymentValue * loanPeriod).toFixed(2);

    dailyRepayment.textContent = dailyRepaymentValue + ' грн';
    totalRepayment.textContent = totalRepaymentValue + ' грн';

    if (
      loanAmount >= 1000 &&
      loanAmount <= 50000 &&
      loanPeriod >= 7 &&
      loanPeriod <= 60
    ) {
      calculateButton.disabled = false;
    } else {
      calculateButton.disabled = true;
    }
  }
}

updateRepayment();

const calculatorForm = document.getElementById('calculator-form');
calculatorForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Кредит отримано!');
  loanAmountInput.value = 1000;
  loanAmountSlider.value = 1000;
  loanPeriodInput.value = 7;
  loanPeriodSlider.value = 7;

  updateRepayment();
});
