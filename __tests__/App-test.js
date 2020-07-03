/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {render} from '@testing-library/react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const {queryAllByTestId} = render(<App />);
  renderer.create(<App />);
});
