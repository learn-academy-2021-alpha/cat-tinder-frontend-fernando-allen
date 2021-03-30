import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SuperheroShow from '../SuperheroShow';

Enzyme.configure({ adapter: new Adapter()})

describe('When SuperheroShow renders', () => {
  let renderedShow;
  beforeEach(() => {
    // arrange
    renderedShow = shallow(<SuperheroShow />);
  });

  it('displays info from paragraph tag', () => {
    // act
    // user is looking for header and footer
    const paragraph = renderedShow.find('p');


    // assert
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text().includes('Show')).toBe(true);
  });
})