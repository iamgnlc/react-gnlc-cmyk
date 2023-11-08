import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Repo from '../../components/Repo';

describe('Repo', () => {
  beforeEach(() => {
    process.env.REACT_APP_REPO_URL = 'github url';
  });

  it('should render correctly without showing', () => {
    const view = render(<Repo />);

    act(() => {
      const event = new KeyboardEvent('keyup', { keyCode: 93 });
      document.dispatchEvent(event);
    });

    expect(view.container).toMatchSnapshot();
  });

  it('should render correctly showing', () => {
    const view = render(<Repo />);

    act(() => {
      const event = new KeyboardEvent('keydown', { keyCode: 93 });
      document.dispatchEvent(event);
    });

    expect(view.container).toMatchSnapshot();
  });
});
