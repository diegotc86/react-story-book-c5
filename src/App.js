import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button type="secondary" onClick={() => console.log("clicked")}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
