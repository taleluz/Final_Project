import { useDispatch } from "react-redux";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import  CartItemType  from "../../../models/cartItem";
import  "../../../styles/details.css"
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../../services/wishlistSlice";
import { addToCart } from "../../../services/cartSlice";
interface Props {
item: CartItemType;
}

const WishItem: React.FC<Props> = ({ item }) => {
const dispatch = useDispatch();
const { image, name, price, quantity } = item;

const handleRemoveItem = (): void => {
dispatch(removeFromWishlist(item));
};

const handleAddToCart = (product: any) => {
  dispatch(addToCart({
    id: product.id, image: `http://127.0.0.1:8000${product.proimage}`,
    name: product.name, price: product.price, quantity
  }))
}

  

return (
<div className="cart-item">
<div className="product-image">
<Link to={`/product/${item.id}`}>
    <img src={image} alt={name} />
  </Link>
</div>
<div className="product-name">
<h2>{name}</h2>
<h2 className="product-price">${price}</h2>
<button  className="button-33" role="button" onClick={handleRemoveItem}>Remove </button>
<button  className="button-33" role="button" onClick={handleAddToCart}>Add to cart </button>
</div>
</div>
);
};

export default WishItem;