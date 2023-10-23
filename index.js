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

  const loanAmountError = document.getElementById('loan-amount-error');
  const loanPeriodError = document.getElementById('loan-period-error');

  if (isNaN(loanAmount) || loanAmount < 1000 || loanAmount > 50000) {
    loanAmountError.textContent =
      'Сума кредиту повинна бути від 1000 до 50000 грн';
    calculateButton.disabled = true;
  } else {
    loanAmountError.textContent = '';
  }

  if (isNaN(loanPeriod) || loanPeriod < 7 || loanPeriod > 60) {
    loanPeriodError.textContent =
      'Період погашення повинен бути від 7 до 60 днів';
    calculateButton.disabled = true;
  } else {
    loanPeriodError.textContent = '';
  }

  if (
    !isNaN(loanAmount) &&
    !isNaN(loanPeriod) &&
    loanAmount >= 1000 &&
    loanAmount <= 50000 &&
    loanPeriod >= 7 &&
    loanPeriod <= 60
  ) {
    const dailyRepaymentValue =
      (loanAmount + loanAmount * (interestRate / 100) * loanPeriod) /
      loanPeriod;
    const totalRepaymentValue = dailyRepaymentValue * loanPeriod;

    dailyRepayment.textContent = dailyRepaymentValue.toFixed(2) + ' грн';
    totalRepayment.textContent = totalRepaymentValue.toFixed(2) + ' грн';

    calculateButton.disabled = false;
  } else {
    dailyRepayment.textContent = '0 грн';
    totalRepayment.textContent = '0 грн';
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
