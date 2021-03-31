import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound';

Enzyme.configure({ adapter: new Adapter()})

describe('When NotFound renders', () => {
  let renderedNotFound;
  beforeEach(() => {
    // arrange
    renderedNotFound = shallow(<NotFound />);
  });

  it('displays info from paragraph tag', () => {
    // act
    // user is looking for header and footer
    const paragraph = renderedNotFound.find('p');


    // assert
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text().includes('oops')).toBe(true);
  });
})