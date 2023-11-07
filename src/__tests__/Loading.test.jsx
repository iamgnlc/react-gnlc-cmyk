import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../Loading';

describe('Loading', () => {
  it('should render correctly', () => {
    const view = render(<Loading />);

    expect(view.container).toMatchSnapshot();
  });
});
