import React, { memo } from 'react';

import g from '../assets/images/g.svg';
import n from '../assets/images/n.svg';
import l from '../assets/images/l.svg';
import c from '../assets/images/c.svg';

const letters = [
  { key: 'g', img: g },
  { key: 'n', img: n },
  { key: 'l', img: l },
  { key: 'c', img: c },
];

const Letter = memo(({ letter }) => <img src={letter.img} alt={letter.key} />);

Letter.displayName = 'Letter';

const GNLC = React.memo(() => {
  return letters.map((letter, i) => {
    return (
      <div key={`${letter.key}-${i}`} className={`letter ${letter.key}`}>
        <Letter letter={letter} />
      </div>
    );
  });
});

GNLC.displayName = 'GNLC';

export default GNLC;
