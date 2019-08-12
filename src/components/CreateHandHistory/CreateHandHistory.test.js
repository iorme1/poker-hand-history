import React from 'react';
import { shallow } from 'enzyme';
import CreateHandHistory from './CreateHandHistory';
import { findByTestAttr } from './../../../Utils';


describe('CreateHandHistory Component', () => {
  describe("component methods", () => {
    describe('addPosition', () => {
      let wrapper;
      let mockState;

      beforeEach(() => {
        wrapper = shallow(<CreateHandHistory />);
        mockState = {
          villains: 1,
          positions: []
        };
      });

      it('should add position to positions array', () => {
        const mockParam = "utg";

        const expected = {
          ...mockState,
          positions: ["utg"]
        };

        wrapper.instance().addPosition(mockParam);
        expect(wrapper.state()).toEqual(expected);
      });

      it('should add positions to array in correct preflop ordering', () =>{
          let instance = wrapper.instance();

          let unorderedPositions = [
            "bb", "lojack", "utg2", "hijack",
            "cutoff", "utg1", "utg", "button", "sb"
          ];

          let expected = {
            ...mockState,
            positions: [
              "utg", "utg1","utg2", "lojack",
              "hijack", "cutoff", "button", "sb", "bb"
            ]
          };

          unorderedPositions.forEach(pos => instance.addPosition(pos));
          expect(wrapper.state()).toEqual(expected);
      });
    });
  });

});
