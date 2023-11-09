import React from 'react';
import { shallow } from 'enzyme';

import Head from '../../components/Head';

describe('Head', () => {
  beforeEach(() => {
    process.env.REACT_APP_AUTHOR = 'Author';
    process.env.REACT_APP_NAME = 'Name';
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Head />);

    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
