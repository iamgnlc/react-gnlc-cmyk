import React from 'react';
import { render } from '@testing-library/react';

import GNLC from '../../components/GNLC';

describe('GNLC', () => {
  it('should render correctly', () => {
    const view = render(<GNLC />);

    expect(view.container).toMatchSnapshot();
  });
});
