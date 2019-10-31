import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../colors/ColorPicker';

describe('ColorPicker component', () => {
  it('Renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker colors={[
      'white', 
      'red', 
      'orange', 
      'yellow', 
      'green', 
      'blue', 
      'indigo', 
      'violet', 
      'black'
    ]} selectColor={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
}); 