import React from "react";

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    console.log("Running side effect");

    const interval = setInterval(() => {
      console.log("Setting state");
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      console.log("Running cleanup");
      clearInterval(interval);
    };
  }, []);

  console.log("Component rendered");

  return <div>{time.toString()}</div>;
}

// 🚫 no need to touch the code for this component!

function App() {
  const [isShowingClock, setIsShowingClock] = React.useState(true);

  function toggle() {
    setIsShowingClock((isShowingClock) => !isShowingClock);
  }

  return (
    <div>
      {isShowingClock ? <Clock /> : null}
      <button onClick={toggle}>{isShowingClock ? "Hide" : "Show"} Clock</button>
    </div>
  );
}

export default App;
