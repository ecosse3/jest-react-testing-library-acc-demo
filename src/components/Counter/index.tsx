import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCounter = () => setCount(count => count + 1);
  const handleDecreaseCounter = () => setCount(count => count - 1);

  return (
    <div>
      <button onClick={handleIncreaseCounter}>Plus</button>
      <div>Count: <span data-testid="count">{count}</span></div>
      <button onClick={handleDecreaseCounter}>Minus</button>
    </div>
  );
}

export default Counter;
