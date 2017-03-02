import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Location from './Location';

describe('<Location />', () => {

  // beforeEach(() => {
  //   let notProps = sinon.stub(allBars, 'map');
  //   let fakeData = ['parsley', 'sage', 'rosemary', 'thyme'];
  //   stub.withArgs('fakeData')
  //
  //   notProps = fakeData
  // })

  it.skip('maps through an array and returns one object', () => {
    let fakeData = ['parsley', 'sage', 'rosemary', 'thyme'];
    let allBars = fakeData;
    const wrapper = shallow(<Location />);
    sinon.stub(fakeData, 'allBars')

    expect(wrapper.find('h3')).to.have.length(1);
    expect(wrapper.find('h4')).to.have.length(1);
  })

  it.skip('allows us to set props', () => {
    const wrapper = mount(<Location prop='one'/>);
    expect (wrapper.props().prop).to.equal('one');
    wrapper.setProps({ prop: 'two' });
    expect(wrapper.props().prop).to.equal('two');
  });
})
