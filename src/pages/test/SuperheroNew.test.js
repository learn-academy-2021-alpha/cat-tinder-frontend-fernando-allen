import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SuperheroNew from '../SuperheroNew';

Enzyme.configure({ adapter: new Adapter()})

describe('When SuperheroNew renders', () => {
  let renderedNew;
  beforeEach(() => {
    // arrange
    renderedNew = shallow(<SuperheroNew />);
  });

  it('displays info from paragraph tag', () => {
    // act
    // user is looking for header and footer
    const paragraph = renderedNew.find('p');


    // assert
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text().includes('New')).toBe(true);
  });
})