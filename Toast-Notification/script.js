'use strict';

const primary = document.getElementById('primary');
const secondary = document.getElementById('secondary');
const success = document.getElementById('success');
const error = document.getElementById('error');
const warning = document.getElementById('warning');
const info = document.getElementById('info');

const position = document.getElementById('position');

primary.addEventListener('click', () => {
  show_toast('primary');
});
secondary.addEventListener('click', () => {
  show_toast('secondary');
});
success.addEventListener('click', () => {
  show_toast('success');
});
error.addEventListener('click', () => {
  show_toast('error');
});
warning.addEventListener('click', () => {
  show_toast('warning');
});
info.addEventListener('click', () => {
  show_toast('info');
});

function show_toast(type) {
  const position_val = position.value;
  create_toast(position_val, type);
}

function create_toast(position_val, type) {
  if (document.querySelector('.toast')) return;

  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(position_val);
  toast.classList.add(type);
  toast.innerHTML = `
    <div>
      <span></span>
      <span>Lorem ipsum dolor sit amet.</span>
  </div>
  `;

  const toast_close = document.createElement('button');
  toast_close.textContent = '❌';
  toast_close.classList.add('close');
  toast.insertAdjacentElement('beforeend', toast_close);

  document.body.appendChild(toast);

  if (document.querySelector('.toast') === null) {
    return;
  } else {
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3500);
  }

  setTimeout(() => {
    console.clear();
  }, 3501);

  toast_close.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
}
