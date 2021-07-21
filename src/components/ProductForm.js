import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = props => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update title and price, description
    return (
        <div className="w-50 p-4 rounded mx-auto ">
            <h3 className="text-center">Product Manger</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-group">
                    <label className="h6">Price</label>
                    <input className="form-control" type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div className="form-group">
                    <label className="h6">Description</label>
                    <textarea className="form-control" name="" id="" cols="30" rows="10" type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <input className="btn btn-sm btn-outline-success mt-2" type="submit" />
            </form >
        </div>
    )
}

export default ProductForm;