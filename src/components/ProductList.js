import React from 'react'
import { Link } from "@reach/router";
export default props => {
    return (
        <div>
            <p>All Products:</p>
            {props.product.map((product) => {
                return (
                    <div key={product._id}>
                        <Link to={/product/ + product._id}> {product.title}</Link>
                        <h1>{product.title}</h1>
                        <p>{product.price}</p>
                        <p>{product.description}</p>

                    </div>
                )
            })}
        </div>
    )
}

