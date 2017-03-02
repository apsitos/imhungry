import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Main from './Main';
import Button from '../Button/Button';

describe('<Main />', () => {

  it('renders a <Main /> component', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find(Main)).to.have.length(1)
  });

  it('mounts with an empty array in state', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('barArray')).to.deep.equal([]);
  });

  it('mounts without latitude and longitude in state', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('lat')).to.deep.equal('');
    expect(wrapper.state('long')).to.deep.equal('');
  });

  it('renders a Header component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('renders a Landing component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('Landing')).to.have.length(1);
  });

  it('renders a p tag in the searchbar', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('renders a Button component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('Button')).to.have.length(1)
  });

  it('renders a clickable Button component', () => {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button handleClick={handleClick}/>);
    wrapper.find('Button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
  });

  it('renders a Location component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('Location')).to.have.length(1);
  });

  it.skip('throws an error when data is not received', () => {
    sinon.stub(error, 'catch');
    const wrapper = mount(<Main />);
    let error = error.catch('error')
    expect(wrapper.find('error')).to.equal('error')
  })

  it.skip('grabs location data', () => {
    const geoLoc = sinon.stub(Main, getCoords);
    const wrapper = mount(<Main />);
    stub.withArgs('position').returns([
      {lat: 39.72},
      {long: -104.97}
    ]);
    let getData = getCoords.getCurrentPosition();
    expect(wrapper.find(position[0].lat)).to.equal(39.72)
    done();
  });

  it.skip('gets restaurants from Google', () => {
    const goog = sinon.stub(getBars, fetch);
    const wrapper = mount(<Main />);
    stub.withArgs('/api/places').returns([
      {name: 'KFC'},
      {name: 'Taco Bell'}
    ]);
    let getRest = getBars.fetch(places.name[0]).to.equal('KFC');
    done();
  });
})
