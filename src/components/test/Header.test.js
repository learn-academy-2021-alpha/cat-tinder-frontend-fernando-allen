// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from '../Header'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When Header loads', () => {

  it('displays a navbar', () => {
    const renderedHeader = shallow(<Header/>);

    const navigationBar = renderedHeader.find('Navbar');

    expect(navigationBar.length).toEqual(1);

    // const collapsedComponent = renderedHeader.find('Collapse');
    // console.log(collapsedComponent.debug())
    // expect(collapsedComponent.props().isOpen).toEqual(false);
  })

  it('displays dropdown when Options is clicked', () => {
    // arrange
    const renderedHeader = shallow(<Header/>);

    // act
    const options = renderedHeader.find('DropdownToggle');
    options.simulate('click');

    // assert
    const dropdownComponent = renderedHeader.find('DropdownItem');
    expect(dropdownComponent.length).toEqual(4);
  })
})