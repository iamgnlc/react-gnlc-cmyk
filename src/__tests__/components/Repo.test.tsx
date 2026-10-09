import { act } from 'react';
import { render } from '@testing-library/react';

import Repo from '../../components/Repo';

describe('Repo', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_REPO_URL', 'github url');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
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
