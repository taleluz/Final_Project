import { useDispatch } from "react-redux";
import { removeFromCart, addItemQuantity, subtractItemQuantity } from "../slices/cartSlice";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import  CartItemType  from "../../../models/cartItem";

interface Props {
item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
const dispatch = useDispatch();
const { image, name, price, quantity } = item;

const handleRemoveItem = (): void => {
dispatch(removeFromCart(item));
};

const handleAddItemQuantity = (): void => {
dispatch(addItemQuantity(item));
};

const handleSubtractItemQuantity = (): void => {
dispatch(subtractItemQuantity(item));
};

return (
<div className="cart-item">
<div className="product-image">
<img src={image} alt={name} />
</div>
<div className="product-name">
<h2>{name}</h2>
<h2 className="product-price">${price}</h2>
<button onClick={handleRemoveItem}>Remove from cart</button>
</div>
<div className="quantity">
<button onClick={handleSubtractItemQuantity}>
<IoRemoveSharp />
</button>
<p>{quantity}</p>
<button onClick={handleAddItemQuantity}>
<IoAddSharp />
</button>
</div>
</div>
);
};

export default CartItem;