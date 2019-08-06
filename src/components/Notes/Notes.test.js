import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('Notes Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            handLabel: "Test String"
          };

          const propsErr = checkProps(Notes, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
