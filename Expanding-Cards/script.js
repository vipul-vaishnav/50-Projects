'use strict';

const cards = document.querySelectorAll('#card');

const foo = () => {
  const cards_array = Array.from(cards);

  cards_array.forEach((card) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('active')) {
        return;
      }

      if (!card.classList.contains('active')) {
        const active_card = cards_array.filter((card) => card.classList.contains('active'));
        active_card.forEach((card) => card.classList.remove('active'));
        card.classList.add('active');
      }
    });
  });
};

foo();
