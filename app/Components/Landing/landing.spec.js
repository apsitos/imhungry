import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Landing from './Landing';

describe('<Landing />', () => {

  it('should have two paragraphs', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find('p')).to.have.length(2);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Landing prop='one'/>);
    expect (wrapper.props().prop).to.equal('one');
    wrapper.setProps({ prop: 'two' });
    expect(wrapper.props().prop).to.equal('two');
  });
})
