import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectProducts } from '../slices/productsSlice';
import { Product } from '../../../models/products';
import { useParams } from 'react-router-dom';
import '../../../styles/details.css';

const ProductDetails = () => {
  const { id } = useParams<{ id: any }>();
  const products = useAppSelector(selectProducts);
  const product: Product | undefined = products.find((product) => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="details">
    {product ? (
      <>
        <div className="image">
          <img src={`http://127.0.0.1:8000${product.proimage}`} alt={product.name} />
        </div>
        <div className="info">
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <p className="size">Size: {product.size_spec}</p>
          <br></br>
          <div className="quantity">
              <label htmlFor="quantity">Quantity:</label>
              <button onClick={decrementQuantity}>-</button>
              <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
              <button onClick={incrementQuantity}>+</button>
          </div>
          <p className="price">${product.price}</p>

          <button className="button-33" role="button">Add to Cart</button>
        </div>
      </>
    ) : (
      <div></div>
    )}
  </div>
  );
};

export default ProductDetails;
