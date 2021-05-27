import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../Helpers/axiosWithAuth";
import { ItemContext } from "../Contexts/ItemContext";
import "./ItemCard.styles.css";
const ItemCard = ({ item }) => {
  const { itemList, setItemList } = useContext(ItemContext);
  const { push } = useHistory();
  const deleteItem = () => {
    axiosWithAuth()
      .delete(`/items/${item.item_id}`)
      .then((res) => {
        console.log(res);
        const result = [
          ...itemList.filter(
            (item) => `${item.item_id}` !== res.data.item_id
          ),
        ];
        setItemList(result);
        console.log(result);
        console.log(res.data.item_id);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card card-block">
        <h4 className="card-title text-right">
          <i
            className="material-icons"
            onClick={() => push(`/edit-item/${item.item_id}`)}
          >
            create
          </i>
          <i
            className="material-icons"
            onClick={(e) => {
              e.stopPropagation();
              deleteItem();
            }}
          >
            delete_forever
          </i>
        </h4>
        <img
          className="item-card-img"
          src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg"
          alt="item"
        />
        <h5 className="card-title mt-2 mb-3">{item.dish_name}</h5>
        <p className="card-text mb-1">Food_Type: {item.food_type}</p>
      </div>
    </div>
  );
};
export default ItemCard;