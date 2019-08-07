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

  describe('Should NOT render when inactive', () => {
    let wrapper;

    const props = {
      active: false
    };

    wrapper = shallow(<StreetNotes {...props} />);

    it('Component should NOT render', () => {
        const component = findByTestAttr(wrapper, 'street-notes-container');
        expect(component.length).toBe(0);
    });
  });

  describe('Should render when active', () => {
    let wrapper;

    const props = {
      active: true
    };
    
    wrapper = shallow(<StreetNotes {...props} />);

    it('Component is rendered', () => {
      const component = findByTestAttr(wrapper, 'street-notes-container')
      expect(component.length).toBe(1);
    })
  });

});
