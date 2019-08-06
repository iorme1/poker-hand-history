import React from 'react';
import { shallow } from 'enzyme';
import ModalCardImage from './ModalCardImage';
import { findByTestAttr, checkProps } from './../../../Utils';

const setUp = ( props={} ) => shallow(<ModalCardImage {...props} />);

describe('ModalCardImage Component', () => {
  let component;

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            src: 'Test String',
            setCard: function testFunction(){}
          };

          const propsErr = checkProps(ModalCardImage, expectedProps);

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
