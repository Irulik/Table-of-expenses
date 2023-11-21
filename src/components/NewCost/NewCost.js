import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = props => {
  const [isFormVisisble, setIsFormVisible] = useState(false);

  const saveCostDataHandler = inputCostData => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    };
      props.onAddCost(costData);
      setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisisble &&
        <button onClick={inputCostDataHandler}>Add new expenses</button>}
      {isFormVisisble &&
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />}
    </div>
  );
};

export default NewCost;
