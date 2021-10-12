import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "."

test('render counter', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');

  expect(counter).toBeInTheDocument();
})

test('render counter with 0 initial value', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');

  expect(counter).toHaveTextContent('0');
})

test('press Plus button once', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');
  const plusButton = screen.getByText(/Plus/);
  fireEvent.click(plusButton);
  expect(counter).toHaveTextContent('1');
})

test('press Minus button once', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');
  const minusButton = screen.getByText(/Minus/);
  fireEvent.click(minusButton);
  expect(counter).toHaveTextContent('-1');
})
