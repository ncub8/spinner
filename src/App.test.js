import { render} from '@testing-library/react';
import App from './App';

describe('App', () => {

  test('renders Spinner Card', () => {
    render(<App />);
    const spinnerCard = document.getElementsByClassName("spinner-card");
    expect(spinnerCard[0]).toBeInTheDocument();
  });
});

