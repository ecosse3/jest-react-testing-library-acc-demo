import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCounter = () => setCount(count => count + 1);
  const handleDecreaseCounter = () => setCount(count => count - 1);

  return (
    <div>
      <button className="btn" onClick={handleDecreaseCounter}>Minus</button>
      <span className="count-span">
        Count:
        <span data-testid="count" className={`count-number ${count > 0 && 'count-positive'} ${count < 0 && 'count-negative'}`}>
          {' '}{count}
        </span>
      </span>
      <button className="btn" onClick={handleIncreaseCounter}>Plus</button>
    </div>
  );
}

export default Counter;
