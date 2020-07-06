/**
 * @format
 */
import React from 'react';
import App from '../src/App';
import {render, fireEvent} from 'react-native-testing-library';

describe('Testing App entry with navigator', () => {
  it('should return all the buttons to navigate', () => {
    const buttons = [
      'App',
      'Hi there!',
      'Go to Components Demo',
      'Go to List Demo',
      'Go to Counter Demo',
      'Go to Image Demo',
      'Go to Colour Demo',
    ];
    const {debug, findByText, getByText, queryByText} = render(<App />);
    buttons.forEach(e => {
      expect(queryByText(e)).not.toBeNull();
    });
  });
});
