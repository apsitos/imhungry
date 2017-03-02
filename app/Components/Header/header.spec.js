import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Header from './Header';

describe('<Header />', () => {

  it('renders a Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should be called Restaurant Locator', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.text()).to.equal('RESTAURANT LOCATOR');
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Header prop='head'/>);
    expect (wrapper.props().prop).to.equal('head');
    wrapper.setProps({ prop: 'foot' });
    expect(wrapper.props().prop).to.equal('foot');
  });
});
