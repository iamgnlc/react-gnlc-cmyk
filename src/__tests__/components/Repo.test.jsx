import React from 'react';
import { render } from '@testing-library/react';

import Repo from '../../components/Repo';

describe('Repo', () => {
  it('should render correctly', () => {
    const view = render(<Repo />);

    expect(view.container).toMatchSnapshot();
  });
});
