import React, { useState } from 'react';
import { axiosWithAuth } from '../Helpers/axiosWithAuth';
export default function ItemForm(props) {
    const [ form, setForm ] = useState(props.itemToEdit || {dish_name: "", food_type: "", servings: ""});
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handlesave = (e) => {
        e.preventDefault();
        if(props.itemToEdit) {
            axiosWithAuth()
            .put(`/items/${props.itemToEdit.id}`, form)
            .then((res) => {
                console.log(res);
                props.setItems(
                    props.items.map((item) => {
                        if(item.id===Number(res.data.id)) {
                            return res.data;
                        }else {
                            return item;
                        }
                    })
                );
            })
            .catch((err) => console.log(err));
        }else {
            axiosWithAuth()
            .post("/items", form)
            .then((res) => {
                props.setItems(res.data);
                props.setAddItem(false);
            })
            .catch((err) => console.log(err));
        }
    };
    const handleDelete = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`items/${props.itemToEdit.id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handlesave}>
                <label>dish_name:</label>
                <input name="dish_name" onChange={handleChange} value={form.dish_name} />
                <label>food_type:</label>
                <input name="food_type" onChange={handleChange} value={form.food_type} />
                <label>servings:</label>
                <input name="servings" onChange={handleChange} value={form.servings} />
                <button type="submit">Save dish</button>
                <button onClick={handleDelete}>delete dish</button>
            </form>
        </div>
    )
};
