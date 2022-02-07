import React from "react";

function App() {
  const [text, setText] = React.useState(localStorage.getItem("text") || "");
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

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
