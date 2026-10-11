import { beforeEach, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import Academics from './sections/Acedemics/Acedemics';
import Stats from './sections/Stats/Stats';
import Contact from './sections/Contact/Contact';

beforeEach(() => {
  window.localStorage.clear();
});

test('shows course details when a program card is selected', () => {
  render(<Academics />);

  fireEvent.click(screen.getByRole('button', { name: 'View details for BS Computer Science' }));

  expect(screen.getByRole('dialog')).toBeInTheDocument();
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: 'BS Computer Science' })).toBeInTheDocument();
  expect(within(dialog).getByText('4 years · 8 semesters')).toBeInTheDocument();
  expect(within(dialog).getByText('Programming and data structures')).toBeInTheDocument();
  expect(within(dialog).getByRole('link', { name: /go to admissions/i })).toHaveAttribute('href', '#admissions');
});

test('searches across program names and details', () => {
  render(<Academics />);

  fireEvent.change(screen.getByRole('searchbox', { name: 'Search programs and study areas' }), {
    target: { value: 'Epidemiology' },
  });

  expect(screen.getByText('Showing 1 program')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'View details for BS Public Health' })).toBeInTheDocument();
});

test('provides the requested clickable contact email', () => {
  render(<Contact />);

  expect(screen.getByRole('link', { name: 'iilmaansari26@gmail.com' }))
    .toHaveAttribute('href', 'mailto:iilmaansari26@gmail.com');
});

test('starts in dark mode and can switch back to the light theme', () => {
  const { container } = render(<App />);

  expect(container.firstChild).toHaveClass('dark');

  fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));

  expect(container.firstChild).not.toHaveClass('dark');
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
  expect(window.localStorage.getItem('theme')).toBe('light');
});

test('counts the university statistics up to their displayed values', async () => {
  render(<Stats />);

  await waitFor(() => {
    expect(screen.getByLabelText('145+')).toHaveTextContent('145+');
  }, { timeout: 3000 });
  await waitFor(() => {
    expect(screen.getByLabelText('96.4%')).toHaveTextContent('96.4%');
  }, { timeout: 3000 });
  await waitFor(() => {
    expect(screen.getByLabelText('80M+')).toHaveTextContent('80M+');
  }, { timeout: 3000 });
  await waitFor(() => {
    expect(screen.getByLabelText('Tier-1')).toHaveTextContent('Tier-1');
  }, { timeout: 3000 });
});
