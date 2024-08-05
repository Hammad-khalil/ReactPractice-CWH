function App() {
  let handleClick = () => {
    alert("Who Clicked ME ? 😒");
  };
  let handleMouseHover = () => {
    alert("Stop Hover On me Dude 🤷‍♂️");
  };
  return (
    <>
      <div>
        <button
          style={{ left: "50%", position: "absolute" }}
          onClick={handleClick}
        >
          {" "}
          Click Me
        </button>
      </div>
      <div onMouseEnter={handleMouseHover} className="container">
        I am a Teal Div
      </div>
    </>
  );
}

export default App;
