import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Button from './Button';

describe('<Button />', () => {

  it('should have a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Button prop='punch'/>);
    expect (wrapper.props().prop).to.equal('punch');
    wrapper.setProps({ prop: 'soda' });
    expect(wrapper.props().prop).to.equal('soda');
  });
});
