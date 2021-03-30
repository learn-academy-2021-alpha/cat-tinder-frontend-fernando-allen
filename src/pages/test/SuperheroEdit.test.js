import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SuperheroEdit from '../SuperheroEdit';

Enzyme.configure({ adapter: new Adapter()})

describe('When SuperheroEdit renders', () => {
  let renderedEdit;
  beforeEach(() => {
    // arrange
    renderedEdit = shallow(<SuperheroEdit />);
  });

  it('displays info from paragraph tag', () => {
    // act
    // user is looking for header and footer
    const paragraph = renderedEdit.find('p');


    // assert
    expect(paragraph.length).toEqual(1);
    expect(paragraph.text().includes('Edit')).toBe(true);
  });
})