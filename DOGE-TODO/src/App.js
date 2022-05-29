import { useState } from "react";
import "./App.css";
import Header from "./component/header";
import Input from "./component/input";
import Output from "./component/output";
import Footer from "./component/footer";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [newItem, setItem] = useState("");

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("todo", JSON.stringify(newList));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addNewItem(newItem);
    console.log(newItem);
    setItem("");
  }
  function addNewItem(item) {
    setItem(item);
    let createItem = {
      id: list.length ? list.length + 1 : 1,
      item: item,
      checked: false,
    };
    let newList = [...list, createItem];
    setList(newList);
    localStorage.setItem("todo", JSON.stringify(newList));
    console.log(newList);
  }

  function clearList() {
    setList([]);
    // localStorage.setItem("todo", JSON.stringify(newlist)); 
    localStorage.clear();
  }

  return (
    <>
      <Header />
      <Input newItem={newItem} handleSubmit={handleSubmit} setItem={setItem} />
      <Output list={list} deleteItem={deleteItem} clearList={clearList}/>
      <Footer />
    </>
  );
}

export default App;
