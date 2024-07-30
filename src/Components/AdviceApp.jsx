import { useEffect, useState } from "react";

export const AdviceApp = () => {
  const [advice, setAdvice] = useState("Please Click button to get Advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Counter count={count} />
    </div>
  );

  function Counter(props) {
    return (
      <p>
        You have Read <b>{props.count}</b> pieces of Advice
      </p>
    );
  }
};
