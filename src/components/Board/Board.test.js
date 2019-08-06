import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('Board Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            handLabel: "Test String"
          };

          const propsErr = checkProps(Board, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
