import React from "react";
import "./ItemCard.styles.css";

export default function ItemCard(props){
const { dish_name, food_type, servings } = props.item;
return (
  <div onClick={() => props.setItemToEdit(props.item)}>
    <h2>dish_name: {dish_name}</h2>
    <h3>food_type: {food_type} </h3>
    <p>servings: {servings}</p>
  </div>
)
}