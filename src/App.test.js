import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Component from './App';

describe('App', () => {
  it('must render', () => {
    const wrapper = render(<Component />);

    expect(wrapper).toBeDefined();
  })

  it('must render with title', () => {
    const { getByTestId } = render(<Component title="Title test" />);

    expect(getByTestId('title').textContent).toBe('Title test');
  })

  it('must type correctly in input', () => {
    const { getByTestId } = render(<Component />);

    const input = getByTestId('input-password');

    userEvent.type(input, 'password');

    expect(input.getAttribute('value')).toBe('password');
  })

  it('must unlock the button and click to block', () => {
    const { getByTestId, queryByTestId } = render(<Component />);

    const input = getByTestId('input-password');

    userEvent.type(input, 'vortigo');

    expect(queryByTestId('button-locked')).not.toBeInTheDocument();
    expect(queryByTestId('button-unlocked')).toBeInTheDocument();

    userEvent.click(queryByTestId('button-unlocked'));

    expect(input.getAttribute('value')).toBe('');
    expect(queryByTestId('button-locked')).toBeInTheDocument();
    expect(queryByTestId('button-unlocked')).not.toBeInTheDocument();
  })
})