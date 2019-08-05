import React from 'react';
import { shallow } from 'enzyme';
import CardModalRow from './CardModalRow';
import { findByTestAttr } from './../../../Utils';

const setUp = ( props={} ) => shallow(<CardModalRow {...props} />);

describe('CardModalRow Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  })

  it('Should render a card image', () => {
    const image = findByTestAttr(component, 'modal-card-image')
    expect(image.length).toBe(1);
  });

});
