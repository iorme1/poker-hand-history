import React from 'react';
import { shallow } from 'enzyme';
import StreetNotes from './StreetNotes';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('StreetNotes Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            active: true
          };

          const propsErr = checkProps(StreetNotes, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
