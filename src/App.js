import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
    {
      id: 'c1',
      date: new Date(2021, 9, 19),
      description: "Refrigerator",
      amount: 999.99
    },
    {
      id: 'c2',
      date: new Date(2023, 8, 20),
      description: "MacBook",
      amount: 1250
    },
    {
      id: 'c3',
      date: new Date(2023, 4, 10),
      description: "Keyboard",
      amount: 50
    }
  ];

const App = () => {
  
  const [costs, setCosts] = useState(INITIAL_COSTS); 

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}
  

export default App;
