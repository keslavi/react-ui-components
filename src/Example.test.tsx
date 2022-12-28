import React from 'react';
// prettier-ignore
import { 
    render, 
    screen, 
    fireEvent 
} from 'tester';

import { Example } from './Example';

const pass = 'btntext';
beforeEach(() => {
  render(<Example text={pass} />);
});

describe('Example', () => {
  it('should render', () => {
    screen.getByRole('button', {
      name: /btntext 0/i,
    });
  });

  it('should increment when clicked', async () => {
    const btn = screen.getByRole('button', {
      name: /btntext 0/i,
    });

    // userEvent.click(btn);
    fireEvent.click(btn);

    expect(
      await screen.getByRole('button', { name: /btntext 1/i })
    ).toBeDefined();
  });
});
