import React, { useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import ShippingType from '../../../models/shipping';
import { createorderAsync } from '../../../services/shippingSlice';
// import { saveShippingAddress } from '../actions/cartActions';

interface ShippingAddressFormProps {
    initialValues: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
        phone: string;
    };
}
const Shipping = () => {
    const dispatch = useAppDispatch();
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");

    const cart = localStorage.getItem("cart"); // Get the value of the "cart" key from localStorage
    const cartObject = JSON.parse(cart || ""); // Convert the JSON string to a JavaScript object
    const cartItems = cartObject.cartItems; // Get the value of "cartItems" from the "cart" object
    const totalPrice = cartObject.totalAmount

    // cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    // cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    // cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)

    // cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    const handleorder = () => {
        dispatch(createorderAsync(
            {
                address, city, country, phone, postalCode, cartItems, taxPrice: 0,
                shippingPrice: 0, totalPrice
            }
        ))
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        placeholder='Address'
                        type="text"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        placeholder='City'
                        type="text"
                        id="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        placeholder='Postal Code'
                        type="text"
                        id="postalCode"
                        value={postalCode}
                        onChange={(event) => setPostalCode(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        placeholder='Country'
                        type="text"
                        id="country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input
                        placeholder='Phone number'
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                    />
                </div>
            </form>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
            <ListGroup.Item>
                <h2>Order Items</h2>
                {cartItems.length === 0 ? <div >Your cart is empty</div> : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item: any, index: any) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                        <img src={item.image} alt={item.name} width={100} height={100} />
                                    </Col>
                                    <Col>
                                        <Link to={`#`}>{item.name}</Link>
                                    </Col>
                                    <Col md={4}>
                                        {item.quantity} X ${item.price} = ${(item.quantity * item.price).toFixed(2)}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </ListGroup.Item>
        </ListGroup>

                </Col >
    <Col md={4}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Order Summary</h2>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>Items:</Col>
                        <Col>{cartObject.quantity}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>Shipping:</Col>
                        <Col>$jmj</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>Tax:</Col>
                        <Col>$dgfdhdgdhfg</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>Total:</Col>
                        <Col>${cartObject.totalAmount}</Col>
                    </Row>
                </ListGroup.Item>


                <ListGroup.Item>
                    {/* {error && <Message variant='danger'>{error}</Message>} */}
                </ListGroup.Item>

                <ListGroup.Item>
                <button onClick={handleorder} >continue to payment</button>

                </ListGroup.Item>

            </ListGroup>
        </Card>
    </Col>
</Row>

    </div>
           

    )
};
export default Shipping