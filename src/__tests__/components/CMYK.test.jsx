import React from 'react';
import { render } from '@testing-library/react';

import CMYK from '../../components/CMYK';

describe('CMYK', () => {
  it('should render correctly', () => {
    const view = render(<CMYK />);

    expect(view.container).toMatchSnapshot();
  });
});
