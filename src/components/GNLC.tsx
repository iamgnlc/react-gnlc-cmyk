import { memo } from 'react';

import g from '../assets/images/g.svg';
import n from '../assets/images/n.svg';
import l from '../assets/images/l.svg';
import c from '../assets/images/c.svg';

interface Letter {
  key: string;
  img: string;
}

const letters: Letter[] = [
  { key: 'g', img: g },
  { key: 'n', img: n },
  { key: 'l', img: l },
  { key: 'c', img: c },
];

const LetterImg = memo(
  ({ letter }: { letter: Letter }) => (
    <img src={letter.img} alt={letter.key} />
  ),
);

LetterImg.displayName = 'Letter';

const GNLC = memo(() => {
  return letters.map((letter, i) => {
    return (
      <div key={`${letter.key}-${i}`} className={`letter ${letter.key}`}>
        <LetterImg letter={letter} />
      </div>
    );
  });
});

GNLC.displayName = 'GNLC';

export default GNLC;
