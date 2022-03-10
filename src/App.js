import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button type="primary" onClick={() => console.log("clicked")}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
