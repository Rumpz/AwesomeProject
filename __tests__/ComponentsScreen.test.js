/**
 * @format
 */
import React from 'react';
import {ComponentsScreen} from '../src/screens';
import {render} from 'react-native-testing-library';

beforeEach(() => {
  return ({queryByText, findByText} = render(<ComponentsScreen />));
});

describe('Testing ComponentsScreen', () => {
  it('should return a view with text', () => {
    expect(queryByText('Getting started with React Native!')).not.toBeNull();
    expect(queryByText('My name is Stephen')).not.toBeNull();
  });

  it('should return a view with text', async () => {
    await expect(findByText(/name/i)).resolves.toBeTruthy();
    await expect(findByText(/something else/i)).rejects.toBeTruthy();
  });
});
