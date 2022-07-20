'use strict';

const content = [
  {
    id: 'x',
    text: `As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns
    black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of
    each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward.
    Its brow and claws are
    larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its
    lower
    neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded
    points.
    The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames
    out
    the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it
    black
    and creates more intense flames.`,
  },
  {
    id: 'y',
    text: `As Mega Charizard Y, it becomes sleeker in appearance but retains its normal coloration. It has three pointed
    horns on the back of its head, the middle of which is longer. Its snout has larger fangs and a ridge on the
    nose. Its neck is shorter, but its torso is thinner and longer. It features longer digitigrade feet.
    Its hands
    are less developed, with extremely shortened fingers that are no longer separated from each other. Small
    wings
    develop on its wrists, while the ones on its back become larger, lose the wing finger passing through their
    membrane and end up with ragged edges. The back of its tail has a large spike at the base and three smaller
    ones
    near the tip, which now burns with a longer flame. Mega Charizard Y is said to have incredible flying
    prowess
    that is greater than a jet fighter.`,
  },
];

const btns = Array.from(document.querySelectorAll('.model-open'));
const close = document.querySelector('.model-close');
const model_text = document.querySelector('.model-text');
const model = document.querySelector('.model');
const overlay = document.querySelector('.mega-overlay');

btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    const id = btn.textContent[btn.textContent.length - 1].toLowerCase();

    content.forEach((el) => {
      if (el.id === id) {
        model_text.textContent = el.text;
        model.classList.add('active');
        overlay.classList.add('active');
      }
    });
  })
);

close.addEventListener('click', foo);
overlay.addEventListener('click', foo);

function foo() {
  model.classList.remove('active');
  overlay.classList.remove('active');
}
