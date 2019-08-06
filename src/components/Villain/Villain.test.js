import React from 'react';
import { shallow } from 'enzyme';
import Villain from './Villain';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('Villain Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            handLabel: "Test String"
          };

          const propsErr = checkProps(Villain, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
