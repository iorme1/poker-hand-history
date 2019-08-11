import React from 'react';
import { shallow } from 'enzyme';
import StreetNotes from './StreetNotes';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('StreetNotes Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = { active: true };
      const propsErr = checkProps(StreetNotes, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component Should NOT render', () => {
    let wrapper;
    const props = { active: false };
    wrapper = shallow(<StreetNotes {...props} />);

    it('Should NOT render when active prop is false', () => {
      const component = findByTestAttr(wrapper, 'street-notes-container');
      expect(component.length).toBe(0);
    });
  });

  describe('Component should render', () => {
    let wrapper;
    const props = { active: true };
    wrapper = shallow(<StreetNotes {...props} />);

    it('Should render when active prop is true', () => {
      const component = findByTestAttr(wrapper, 'street-notes-container')
      expect(component.length).toBe(1);
    })
  });

  describe("onchange methods", () => {
    let wrapper;
    let mockState = {
      preflop_notes: "no notes added...",
      flop_notes: "no notes added...",
      turn_notes: "no notes added...",
      river_notes: "no notes added...",
      modal: false,
    }

    beforeEach(() => {
      wrapper = shallow(<StreetNotes />);
    });

    describe('setPreflopNotes', () => {
      it('should call setState on preflop_notes', () => {
        const mockEvent = { target: { value: "testing preflop notes" } };

        const expected = {
          ...mockState,
          preflop_notes: "testing preflop notes",
        };

        wrapper.instance().setPreflopNotes(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    });


    describe('setFlopNotes', () => {
      it('should call setState on flop_notes', () => {
        const mockEvent = { target: { value: "testing flop notes"} };

        const expected = {
          ...mockState,
            flop_notes: "testing flop notes",
        };

        wrapper.instance().setFlopNotes(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    });

    describe('setTurnNotes', () => {
      it('should call setState on turn_notes', () => {
        const mockEvent = { target: { value: "testing turn notes"} };

        const expected = {
          ...mockState,
            turn_notes: "testing turn notes",
        };

        wrapper.instance().setTurnNotes(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    });

    describe('setRiverNotes', () => {
      it('should call setState on river_notes', () => {
        const mockEvent = { target: { value: "testing river notes"} };

        const expected = {
          ...mockState,
            river_notes: "testing river notes",
        };

        wrapper.instance().setRiverNotes(mockEvent);
        expect(wrapper.state()).toEqual(expected);
      });
    });
  });


  describe('Renders all notes', () => {
    let wrapper;
    const props = { active: true };

    beforeEach(() => {
      wrapper = shallow(<StreetNotes {...props}/>);
    });

    it('renders preflop notes', () => {
      let preflop_notes = findByTestAttr(wrapper, "pf-notes");
      expect(preflop_notes.length).toBe(1);
    });

    it('renders flop notes', () => {
      let flop_notes = findByTestAttr(wrapper, "fl-notes");
      expect(flop_notes.length).toBe(1);
    });

    it('renders turn notes', () => {
      let turn_notes = findByTestAttr(wrapper, "tn-notes");
      expect(turn_notes.length).toBe(1);
    });

    it('renders river notes', () => {
      let river_notes = findByTestAttr(wrapper, "rv-notes");
      expect(river_notes.length).toBe(1);
    });
  });
});
