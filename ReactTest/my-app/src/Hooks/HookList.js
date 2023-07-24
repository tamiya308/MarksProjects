import React, { useState } from "react";
import Button from "../Shared/Button";
import ListItem from "../Shared/ListItem";
import Title from "../Shared/Title";
// import { randomInclusiveInt } from "../Shared/Utils";

const HookList = ({ title, items }) => {
  const [listItems, setListItems] = useState(items);
  const [newItemName, setNewItemName] = useState("");

  const getMaxValue = () => {
    var result = Math.max.apply(Math, listItems.map(function (o) { return o.id; }));
    return result;
  };

  const addToList = () => {
    var maxId = getMaxValue();

    const newItem = {
      id: maxId + 1,
      label: newItemName,
      isDone: false,
    };
    // listItems.push(newItem);
    setListItems([...listItems, newItem]);
    // setNewItemName("");
  };

  const checkItemFunc = (id) => {
    var objIndex = listItems.findIndex((obj) => obj.id == id);
    listItems[objIndex].isDone = !listItems[objIndex].isDone;
    setListItems([...listItems]);

    // Complicated syntax below :
    // setListItems({
    //   ...listItems,
    //   [id]: { ...listItems[id], isDone: !listItems[id].isDone },
    // });
  };

  return (
    <div className="list-container">
      <div className="list">
        <Title>{title}</Title>
        {Object.keys(listItems).map((itemKey) => {
          const item = listItems[itemKey];
          return (
            <ListItem
              key={itemKey}
              id={item.id}
              checkItem={checkItemFunc}
              isDone={!!item.isDone}>
              {item.label}
            </ListItem>
          );
        })}
      </div>
      <div>
        <input type="text" onChange={({ target }) => setNewItemName(target.value)} value={newItemName} />
        <Button onClick={addToList} disabled={!newItemName}>Add</Button>
      </div>
    </div>
  );
};

export default HookList;
