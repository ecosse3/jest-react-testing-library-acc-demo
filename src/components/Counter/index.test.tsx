import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "."

test('render counter', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');

  expect(counter).toBeInTheDocument();
})

test('expect two buttons', () => {
  render(<Counter />)
  const buttons = screen.getAllByRole('button')

  expect(buttons).toHaveLength(2);
})

test('render counter with 0 initial value', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');

  expect(counter).toHaveTextContent('0');
})

test('render counter with 5 initial value', () => {
  render(<Counter initialValue={5} />)
  const counter = screen.getByTestId('count');

  expect(counter).toHaveTextContent('5');
})

test('press Plus button once', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');
  // const plusButton = screen.getByText(/Plus/i);
  const plusButton = screen.getByRole('button', {
    name: /Plus/i
  })
  fireEvent.click(plusButton);

  expect(counter).toHaveTextContent('1');
})

test('press Minus button once', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');
  // const minusButton = screen.getByText(/Minus/i);
  const minusButton = screen.getByRole('button', {
    name: /Minus/i
  })
  fireEvent.click(minusButton);

  expect(counter).toHaveTextContent('-1');
})

test('count number equal to 0 has black color', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');

  expect(counter).toHaveClass('count-number');
  expect(counter).not.toHaveClass('count-positive');
  expect(counter).not.toHaveClass('count-negative');
})

test('positive count number has green color', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');
  const plusButton = screen.getByRole('button', {
    name: /Plus/i
  })
  fireEvent.click(plusButton);

  expect(counter).toHaveClass('count-positive');
})

test('negative count number has red color', () => {
  render(<Counter />)
  const counter = screen.getByTestId('count');
  const minusButton = screen.getByRole('button', {
    name: /Minus/i
  })
  fireEvent.click(minusButton);

  expect(counter).toHaveClass('count-negative');
})
