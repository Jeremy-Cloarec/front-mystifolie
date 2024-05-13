import App from './App';
import { render, waitFor } from '@testing-library/react-native';

it('renders correctly', async () => {
    await waitFor(() => render(<App />))
});