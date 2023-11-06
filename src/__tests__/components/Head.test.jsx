import React from 'react';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';

import Head from '../../components/Head';

configure({ adapter: new Adapter() });

describe('Head', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Head />);

    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
