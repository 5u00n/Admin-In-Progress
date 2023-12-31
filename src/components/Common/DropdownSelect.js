import React, { useState } from "react";

import { Label } from "reactstrap";
import Select from "react-select";


const DropdownSelect = ({optionGroup}) => {


  if(optionGroup==null){
  optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" }
      ]
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ];
}
  const [selectedGroup, setselectedGroup] = useState(null);

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }
  return (
    <Select
      value={selectedGroup}
      onChange={() => {
        handleSelectGroup();
      }}
      options={optionGroup}
      classNamePrefix="select2-selection"
    />
  );
}

export default DropdownSelect;
