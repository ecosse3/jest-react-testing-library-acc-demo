import { useState } from "react";

interface IProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: IProps) => {
  const [count, setCount] = useState(initialValue);

  const handleIncreaseCounter = () => setCount(count => count + 1);
  const handleDecreaseCounter = () => setCount(count => count - 1);

  return (
    <div>
      <h1>My Counter</h1>
      <div className="count-text">
        Count:
      </div>
      <div className="count-container">
        <button className="btn" onClick={handleDecreaseCounter}>Minus</button>
        <span
          data-testid="count"
          className={`count-number ${count > 0 && 'count-positive'} ${count < 0 && 'count-negative'}`}
        >
          {count}
        </span>
        <button className="btn" onClick={handleIncreaseCounter}>Plus</button>
      </div>
    </div>
  );
}

export default Counter;
