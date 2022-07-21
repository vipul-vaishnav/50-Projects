'use strict';

const password_field = document.querySelector('#password');
const copy = document.querySelector('#copy');
const length_field = document.querySelector('#length');
const check_uppercase = document.querySelector('#uppercase');
const check_lowercase = document.querySelector('#lowercase');
const check_number = document.querySelector('#number');
const check_symbol = document.querySelector('#symbol');
const submit = document.querySelector('#submit');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => e.preventDefault());

copy.addEventListener('click', copyToClipboard);

const uppercase_letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const lowercase_letters = uppercase_letters.map((letter) => letter.toLowerCase());

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '?'];

submit.addEventListener('click', () => {
  const length_of_password = +length_field.value;
  const include_uppercase_letters = check_uppercase.checked;
  const include_lowercase_letters = check_lowercase.checked;
  const include_numbers = check_number.checked;
  const include_symbols = check_symbol.checked;

  if (length_of_password < 8 || length_of_password > 24) {
    return;
  }

  let password = '';

  if (!include_uppercase_letters && !include_lowercase_letters && !include_numbers && !include_symbols) {
    alert('Bhai! Kya kar raha hai, Kuch toh select kar');
    return;
  }

  const typeArr = ['upc', 'lwc', 'num', 'sym'];

  while (password.length < length_of_password) {
    const random = Math.floor(Math.random() * typeArr.length);

    const code = typeArr[random];

    if (code === 'upc' && include_uppercase_letters) {
      password += getRandomChar(uppercase_letters);
    } else if (code === 'lwc' && include_lowercase_letters) {
      password += getRandomChar(lowercase_letters);
    } else if (code === 'num' && include_numbers) {
      password += getRandomChar(numbers);
    } else if (code === 'sym' && include_symbols) {
      password += getRandomChar(symbols);
    }
  }

  password_field.value = shuffle(random_index_arr_generator(length_of_password), password);
});

// random letter generator
function getRandomChar(arr) {
  const letter = arr[Math.floor(Math.random() * arr.length)];
  return letter;
}

// Random Index Generator
function random_index_arr_generator(length_of_password) {
  const random_index_arr = [];

  while (random_index_arr.length < length_of_password) {
    const random = Math.floor(Math.random() * length_of_password);

    if (!random_index_arr.includes(random)) {
      random_index_arr.push(random);
    }
  }

  return random_index_arr;
}

// Shuffling Password String
function shuffle(idx_arr, pass_string) {
  let shuffled_password = '';

  for (let i = 0; i < idx_arr.length; i++) {
    shuffled_password += pass_string[idx_arr[i]];
  }

  return shuffled_password;
}

function copyToClipboard() {
  const password = password_field.value;

  if (!password || password.trim().length === 0) {
    alert('Pehle generate toh karle password');
  }

  const copy_password = password_field.select();
  document.execCommand('copy');

  alert('Password copied to clipboard');
}
