import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('should have Docs text', () => {
    render(<Home />); /* Arrange */
    const myElem = screen.getByText('Docs'); /* Act */
    expect(myElem).toBeInTheDocument(); /* Assert */
  });
  it('should have a heading', () => {
    render(<Home />); /* Arrange */
    const myElem = screen.getByRole('heading', {
      name: 'Deploy',
    }); /* Act */
    expect(myElem).toBeInTheDocument(); /* Assert */
  });
});
