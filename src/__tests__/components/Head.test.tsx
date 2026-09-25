import { render } from '@testing-library/react';

import Head from '../../components/Head';

describe('Head', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_AUTHOR', 'Author');
    vi.stubEnv('VITE_NAME', 'Name');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should render title and metadata into the document head', () => {
    render(<Head />);

    expect(document.title).toBe('Author / Name');
    expect(document.head).toMatchSnapshot();
  });
});
