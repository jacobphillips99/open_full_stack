import React from "react";

const EventHandlerPractice = () => {
  const [count, setCount] = useState(0);

  const handleClick = (increment) => {
    return () => {
      setCount(count + increment);
    };
  };

  return (
    <div>
      {count}
      <button onClick={handleClick(1)}>+1</button>
      <button onClick={handleClick(10)}>+10</button>
      <button onClick={handleClick(100)}>+100</button>
    </div>
  );
};

export default EventHandlerPractice;
