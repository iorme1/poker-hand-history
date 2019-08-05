import React from 'react';
import { shallow } from 'enzyme';
import CardModalRow from './CardModalRow';
import { findByTestAttr, checkProps } from './../../../Utils';

const setUp = ( props={} ) => shallow(<CardModalRow {...props} />);

describe('CardModalRow Component', () => {
  let component;

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            src: 'Test String',
            setCard: function testFunction(){}
          };

          const propsErr = checkProps(CardModalRow, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });

  beforeEach(() => {
    component = setUp();
  });

  it('Should render a card image', () => {
    const image = findByTestAttr(component, 'modal-card-image')
    expect(image.length).toBe(1);
  });

});
