import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "Japan", "Manila", "London", "Russia"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Places"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
