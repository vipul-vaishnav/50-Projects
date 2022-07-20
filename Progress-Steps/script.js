'use strict';

const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
const bar = document.querySelector('.bar-block');
const steps = Array.from(document.querySelectorAll('#num'));

// backward logic
const move_back = () => {
  let idx = steps.filter((step) => step.classList.contains('active')).length - 1;
  if (idx === 0) {
    alert("You're done boy!😑");
    return;
  }
  bar.classList.remove(`fill-${idx}`);
  steps[idx].classList.remove('active');
  bar.classList.add(`fill-${--idx}`);
};

prev.addEventListener('click', move_back);

// forward logic
const move_for = () => {
  let idx = steps.filter((step) => step.classList.contains('active')).length - 1;
  if (idx === steps.length - 1) {
    alert("You're done boy!😑");
    return;
  }
  bar.classList.remove(`fill-${idx}`);
  steps[++idx].classList.add('active');
  bar.classList.add(`fill-${idx}`);
};

next.addEventListener('click', move_for);
