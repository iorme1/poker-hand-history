import React from 'react';
import { shallow } from 'enzyme';
import CommentNotes from './CommentNotes';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('CommentNotes Component', () => {

  describe('Checking PropTypes', () => {

      it('Should not throw a warning', () => {

          const expectedProps = {
            active: true
          };

          const propsErr = checkProps(CommentNotes, expectedProps);

          expect(propsErr).toBeUndefined();

      });
  });
});
