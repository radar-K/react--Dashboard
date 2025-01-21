import { useState } from "react";
import Alert from "./alert";
import Button from "./button";

function App() {

  const [alertVisible, setAlertVisibility]  = useState(false)

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onclick={() => setAlertVisibility(true)}>knapp</Button>
    </div>
  );
}

export default App;



// <ListGroup items={items} heading="cities" />   let items = ["westerås", "stockholmia", "en trevlig stad"]; import ListGroup from "./components/ListGroup";


