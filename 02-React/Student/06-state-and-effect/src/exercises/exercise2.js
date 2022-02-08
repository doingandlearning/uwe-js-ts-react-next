import React from "react";

function App() {
  // ✅ update the initial state for text to read a value using

  const initialState = () => localStorage.getItem("text") || "";
  const [text, setText] = React.useState(initialState);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Running side effect");
    localStorage.setItem("text", text);
  }, [text]);

  // React.useEffect(() => {
  //   const savedValue = ;

  //   if (savedValue) {
  //     setText(savedValue);
  //   }
  // }, []);

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
