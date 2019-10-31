import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer component', () => {
  it('Renders ColorContainer', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Changes div color on button click', () => {
    const wrapper = mount(<ColorContainer colors={[
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo', 
      'violet']} />);
    wrapper.findWhere(el => el.key() === 'black').simulate('click');
    expect(wrapper.state('backgroundColor')).toBe('black');
  });
});