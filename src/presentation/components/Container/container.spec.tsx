import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Container from '.';

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Container>
        <h1>Children</h1>
      </Container>,
    );

    const childrenElement = screen.getByRole('heading', {
      name: /children/i,
    });

    expect(childrenElement).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('container mx-auto');
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="
        container
        mx-auto
        px-4
      "
      >
        <h1>
          Children
        </h1>
      </div>
    `);
  });
});
