/**
 * @format
 */
import React from 'react';
import App from '../src/App';
import {render, fireEvent, cleanup} from 'react-native-testing-library';

beforeEach(() => {
  return ({queryByText} = render(<App />));
});

describe('Testing App entry with navigator', () => {
  test('should return all the buttons to navigate', () => {
    const buttons = [
      'App',
      'Hi there!',
      'Go to Components Demo',
      'Go to List Demo',
      'Go to Counter Demo',
      'Go to Image Demo',
      'Go to Colour Demo',
    ];
    buttons.forEach(text =>
      expect(queryByText(text).props.children).toEqual(text),
    );

    expect(queryByText('not in any screen')).toBeNull();
  });

  test('should navigate to all the screens', () => {
    const toClick = queryByText('Go to Components Demo');
    fireEvent.press(toClick);
    expect(queryByText('Getting started with React Native!')).not.toBeNull();
    expect(queryByText('My name is Stephen')).not.toBeNull();
  });
});
