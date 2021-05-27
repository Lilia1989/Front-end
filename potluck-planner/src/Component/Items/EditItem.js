import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../Helpers/axiosWithAuth";
import { ItemContext } from "../Contexts/ItemContext";
const EditItem = () => {
  const { itemList, setItemList } = useContext(ItemContext);
  const [editItem, setEditItem] = useState({
    dish_name: "",
    food_type: "",
    servings: "",
    user_id: parseInt(localStorage.getItem("id")),
  });
  const { push } = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axiosWithAuth()
      .get(`/items/${id}`)
      .then((res) => {
        console.log("item_id", res);
        setEditItem(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleChanges = (e) => {
    e.persist();
    e.preventDefault();
    setEditItem({
      ...editItem,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    //console.log(editItem);
    const editedItem = {
      dish_name: editItem.dish_name,
      food_type: editItem.food_type_type,
      servings: editItem.servings,
      user_id: parseInt(localStorage.getItem("id")),
    };
    axiosWithAuth()
      .put(`/items/${id}`, editedItem)
      .then((res) => {
        console.log(res);
        setItemList([...itemList, res.data]);
        push("/my-items");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left3 d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center">EDIT Item</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="text"
                    name="dish_name"
                    onChange={handleChanges}
                    placeholder="dish_name"
                    value={editItem.dish_name}
                    className="form-control"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputdish_name">dish_name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    name="food-type"
                    onChange={handleChanges}
                    placeholder="food-type"
                    value={editItem.food_type}
                    className="form-control"
                    required
                  />
                  <label htmlFor="inputfood_type">Food_Type</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    name="Servings"
                    onChange={handleChanges}
                    placeholder="Servings"
                    value={editItem.servings}
                    className="form-control"
                    required
                  />
                  <label htmlFor="servings">Servings</label>
                </div>
                <button
                  className="btn btn-lg btn-outline-success btn-block text-uppercase"
                  type="submit"
                >
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditItem;