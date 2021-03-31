import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SuperheroIndex from '../SuperheroIndex';

Enzyme.configure({ adapter: new Adapter()})

describe('When SuperheroIndex renders', () => {
  let renderedIndex;
  beforeEach(() => {
    // arrange
    renderedIndex = shallow(<SuperheroIndex />);
  });

  it('displays info from paragraph tag', () => {
    // act
    // user is looking for header and footer
    const paragraph = renderedIndex.find('p');


    // assert
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text().includes('Index')).toBe(true);
  });
})