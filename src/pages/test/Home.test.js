import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home';

Enzyme.configure({ adapter: new Adapter()})

describe('When Home renders', () => {
  let renderedHome;
  beforeEach(() => {
    // arrange
    renderedHome = shallow(<Home />);
  });

  it('displays info from paragraph tag', () => {
    // act
    // user is looking for header and footer
    const paragraph = renderedHome.find('p');


    // assert
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text().includes('Home')).toBe(true);
  });
})