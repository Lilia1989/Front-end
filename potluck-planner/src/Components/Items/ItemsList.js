import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { fetchItems } from "../Helpers/getItems";
import ItemForm from "./ItemForm";
export default function ItemsList(){
  const [items, setItems] = useState([]);
  const [addItem,setAddItem] = useState(false);
  const [itemToEdit,setItemToEdit] = useState();
  useEffect(() => {
 fetchItems()
 .then((res) => {
   console.log(res);
   setItems(res.data);
 })
 .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Choose one of these popular dishes </h2>
      <h3>To bring with you to the Party</h3>
      {addItem && <ItemForm setAddItem={setAddItem} setItems={setItems} />}
      {itemToEdit? (
        <ItemForm itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} items={items} setItems={setItems} />
      ) : (
        <button onClick={() => setAddItem(true)}>Add a Dish</button>
      )}
      {items.map((item) =>(
    <ItemCard item={item} key={item.id} setItemToEdit={setItemToEdit} />
      ))}
    </div>
  )
}