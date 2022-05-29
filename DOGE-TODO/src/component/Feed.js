import React from "react";
// import ListItem from './Item'
import "./feed.css";

export default function Feed(props) {

  return (
    <div className="feed">
      <ul className="list">
        {props.list.map((item) => (
          <li key={item.id} className="listItem">
            <p
              className="item-row">{item.item}
            </p>
            <button
              className="item-btn"
              onClick={() => props.deleteItem(item.id)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </li>
          // console.log("hello")
        ))}
      </ul>
      <div className="feed-btn">
        <button className="extra-btn" onClick={props.clearList}>CLEAR</button>
      </div>
    </div>
  );
}
