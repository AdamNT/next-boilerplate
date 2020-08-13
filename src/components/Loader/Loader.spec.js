import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './Loader';

describe('Loader', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Loader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
