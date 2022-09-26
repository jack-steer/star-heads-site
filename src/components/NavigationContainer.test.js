/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import NavigationContainer from './NavigationContainer';

test('renders app title text', () => {
  const { getByText } = render(<NavigationContainer />);
  const titleElement = getByText(/Star Head Search/i);
  expect(titleElement).toBeInTheDocument();
});
