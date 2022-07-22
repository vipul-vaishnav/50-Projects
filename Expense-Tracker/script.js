'use strict';

const total = document.querySelector('.total');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');
const amount = document.querySelector('#value');
const type = document.querySelector('#type');
const error = document.querySelector('.error');
const error_close = document.querySelector('#error-close');
const submit = document.querySelector('#submit');
const form = document.querySelector('#form');

function load() {
  const curr_total = JSON.parse(localStorage.getItem('Balance'));
  const total_income = JSON.parse(localStorage.getItem('Income'));
  const total_expense = JSON.parse(localStorage.getItem('Expense'));

  total.textContent = `$${curr_total.toFixed(2)}`;
  income.textContent = `$${total_income.toFixed(2)}`;
  expense.textContent = `$${total_expense.toFixed(2)}`;
}

load();

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

error_close.addEventListener('click', () => {
  error.classList.add('hidden');
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const amount_value = amount.value;

  if (!amount_value || Number(amount_value) === 0) {
    return;
  }

  if (Number(amount_value) < 0) {
    error.classList.remove('hidden');
    setTimeout(() => {
      error.classList.add('hidden');
    }, 3500);
    return;
  }

  let curr_total = parseFloat(total.textContent.slice(1));
  let total_income = parseFloat(income.textContent.slice(1));
  let total_expense = parseFloat(expense.textContent.slice(1));

  if (type.value === 'income') {
    curr_total += Number(amount_value);
    total_income += Number(amount_value);
  } else if (type.value === 'expense') {
    curr_total -= Number(amount_value);
    total_expense += Number(amount_value);
  }

  localStorage.setItem('Balance', JSON.stringify(curr_total));
  localStorage.setItem('Income', JSON.stringify(total_income));
  localStorage.setItem('Expense', JSON.stringify(total_expense));

  total.textContent = `$${curr_total.toFixed(2)}`;
  income.textContent = `$${total_income.toFixed(2)}`;
  expense.textContent = `$${total_expense.toFixed(2)}`;

  form.reset();
});
