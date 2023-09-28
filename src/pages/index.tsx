import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <h1>Welcome to our exercise!</h1>
      <p data-testid="counter">{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </main>
  );
}
