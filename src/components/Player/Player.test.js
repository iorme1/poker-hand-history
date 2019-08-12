import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('Player Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            player_type: "Test String",
            addPosition: function(){},
            positionsTaken: new Set()
          };

          const propsErr = checkProps(Player, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
