import React, { useState } from "react";
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./FoodInput";
function App() {
  // let fooditem = ["dal", "green vegies", "roti", "salad", "milk", "rice"];
  // let fooditem = [];
  // let emptyMessages = fooditem.length === 0 ? <h2>Im hungry</h2> : null;
  // let textState = useState("food item enter by user");
  // let textToShow = textState[0];
  // let textMeth = textState[1];
  let [fooditem, setfoodItem] = useState([]);
  // let [textToShow, textMeth] = useState("food item entered");

  let handleChange = (event) => {
    if (event.key === "Enter") {
      let newFooditem = event.target.value;
      event.target.value = "";
      let newItems = [...fooditem, newFooditem];
      setfoodItem(newItems);
      console.log(newFooditem);
    }
    // textMeth(even.target.value);
  };
  return (
    <>
      <Container>
        <h1>Healthy dish</h1>
        {/* <p>{textToShow}</p> */}
        <FoodInput handleChange={handleChange}></FoodInput>
        <Fooditems items={fooditem}></Fooditems>
        <ErrorMessage items={fooditem}></ErrorMessage>
      </Container>
      {/* <Container>
        <p>hello</p>
      </Container> */}
    </>
  );
}
export default App;
