import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "Japan", "Manila", "London", "Russia"];

  return (
    <div>
      <ListGroup items={items} heading="Places" />
    </div>
  );
}

export default App;
