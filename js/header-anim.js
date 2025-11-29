import { createTimeline, stagger, utils, splitText } from 'https://esm.sh/animejs';

const { words, chars } = splitText('p', {
  words: { wrap: 'clip' },
  chars: true,
});

createTimeline({
  loop: true,
  defaults: { ease: 'inOut(3)', duration: 650 }
})
.add(words, {
  y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
}, stagger(300))
.add(chars, {
  y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
}, stagger(50, { from: 'random' }))
.init();
