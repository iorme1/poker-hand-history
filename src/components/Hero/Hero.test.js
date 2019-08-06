import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('Hero Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            handLabel: "Test String"
          };

          const propsErr = checkProps(Hero, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
