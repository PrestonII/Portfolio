import { render, screen } from '@testing-library/react';
import MockResizeObserver from '../../utils/mockResizeObserver';
import Home from './home.layout';

beforeAll(async () => {
  window.ResizeObserver = MockResizeObserver;
});

describe('App', () => {
  it('renders without crashing', async () => {
    const title = 'Preston Smith';
    render(<Home />);
    const element = await screen.findAllByRole('heading', { name: title })[0];
    expect(element).toBeInTheDocument();
  });
});
