import { Dispatch } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import CartItemType from "../../../models/cartItem";
import "../../../styles/cart.css";
import CartItem from "./CartItem";
import { clearCart, toggleShowCart } from "../slices/cartSlice";


const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalAmount, quantity, showcart } = useAppSelector((state: RootState) => state.cart);
  // console.log(quantity)
  console.log(showcart)

  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }

  // const removeAllItemsFromCart = () =>{
  //     dispatch(clearCart());
  //   };

  return (
    <div>


      <div
        className={`offcanvas offcanvas-end ${showcart ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={() => dispatch(toggleShowCart())}
          ></button>
        </div>

        <div className="offcanvas-body">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="d-flex justify-content-between mt-3">
            <strong>Total:</strong>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button
            className="btn btn-danger mt-3"
            onClick={()=> dispatch(clearCart)}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};


//         <div className="Cart container">
//             <h1>Cart</h1>
//             <div className="cart-items">
//                 {cartItems.map((item) => (
//                     <CartItem key={item.id} item={item} />

//                 ))}


//             </div>
//             <h2 className="total">Total Amount:${ totalAmount.toFixed(2)}</h2>

//             <button onClick={() =>  dispatch( clearCart())} >Clear All</button>


//         </div>
//     );
// };

export default Cart;
