import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = props => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product') //getting from database
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList product={product} />}
        </div>
    )
}

export default Main;