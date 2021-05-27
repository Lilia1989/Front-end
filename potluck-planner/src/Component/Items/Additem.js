import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../Helpers/axiosWithAuth";
import { ItemContext } from "../Contexts/ItemContext";
import "./ItemCard.styles.css";
const Additem = () => {
  const { itemList, setItemList } = useContext(ItemContext);
  const [newItem, setNewItem] = useState({
    dish_name: "",
    food_type: "",
    servings: "",
    user_id: parseInt(localStorage.getItem("id")),
    // food_type_id: "",
  });
  const handleChanges = (e) => {
    e.persist();
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log("submit item", newItem);
    e.preventDefault();
    axiosWithAuth()
      .post("/items", newItem)
      .then((res) => {
        console.log(res);
        setItemList([...itemList, res.data]);
      })
      .catch((err) => console.log(err));
    setNewItem({ dish_name: "", food_type: "", servings: "" });
  };
  return (
    <div class="item-card-bttm col-md-3 col-sm-6">
      <div className="text-center">
        <div className="centered">
          <div className="card card-block">
            <h5 class="card-title mt-3 mb-3 firstLine">
              {" "}
              N &nbsp; E &nbsp; W &nbsp; &nbsp; P &nbsp; L &nbsp; A &nbsp; N
              &nbsp; T
            </h5>
            ----------------------------
            <p className="card-text secondLine add-item-input">
              Add new Item to the list
            </p>
            <p>
              {" "}
              <input
                type="text"
                name="dish_name"
                onChange={handleChanges}
                placeholder="dish_name"
                value={newItem.dish_name}
              />{" "}
            </p>
            <p>
              {" "}
              <input
                type="text"
                name="food_type"
                onChange={handleChanges}
                placeholder="food_type"
                value={newItem.food_type}
              />{" "}
            </p>
            <p>
              {" "}
              <input
                type="text"
                name="servings"
                onChange={handleChanges}
                placeholder="servings"
                value={newItem.servings}
              />{" "}
            </p>
            <button
              onClick={handleSubmit}
              type="button"
              class="add-btn btn btn-outline-success"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Additem;