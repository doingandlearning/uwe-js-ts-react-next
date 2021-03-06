import React from "react";

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];

  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  );
}

function CountDisplay() {
  const [count] = React.useContext(CountContext);
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [_count, setCount] = React.useContext(CountContext);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
