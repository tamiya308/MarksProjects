import React from 'react';
import CheckBox from './Checkbox';

const ListItem = props => (
  <div>
    <CheckBox id={props.id} checked={props.isDone} onCheck={props.checkItem} />
    <span className="list-item">{props.children}</span>
  </div> 
)
export default ListItem;