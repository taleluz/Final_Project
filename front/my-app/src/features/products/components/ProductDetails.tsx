import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectProducts } from '../slices/productsSlice';import { Product } from '../../../models/products';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams<{ id: any }>();
    const products = useAppSelector(selectProducts);
    const product: Product | undefined = products.find((product) => product.id === parseInt(id));

  
    return (
        <div>
          {product ? (
            <div>
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <p>{product.size_spec}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Count in Stock: {product.count_in_stock}</p>
              <p>Category: {product.category}</p>
              <p>Subcategory: {product.subcategory}</p>
              <img src={`http://127.0.0.1:8000${product.proimage}`} alt={product.name} />
              <button>Buy</button>
            </div>
          ) : (
            <div>Product not found</div>
          )}
        </div>
      );
    };
    
    export default ProductDetails;