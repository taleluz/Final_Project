import { Dispatch } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import CartItemType from "../../../models/cartItem";
import { clearCart } from "../../../services/cartSlice";
import "../../../styles/cart.css";
import CartItem from "./CartItem";


const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, totalAmount, quantity } = useAppSelector((state: RootState) => state.cart);

  // if (quantity === 0) {
  //   return <h2 className="no-items">No items in cart...</h2>;
  // }


  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div className="offcanvas-body">
        {quantity === 0 ? (
          <h2 className="no-items">No items in cart...</h2>
        ) : (
          <>
            {cartItems.map((item: CartItemType) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="d-flex justify-content-between mt-3">
              <strong>Total:</strong>
              <span>${totalAmount.toFixed(2)}</span>
              <button
                className="btn btn-danger mt-3"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;



