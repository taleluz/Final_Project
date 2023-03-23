import React, { useState } from 'react';
import { Form } from 'react-router-dom';
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
const cartObject = JSON.parse(cart ||""); // Convert the JSON string to a JavaScript object
const cartItems = cartObject.cartItems; // Get the value of "cartItems" from the "cart" object
const totalPrice = cartObject.totalAmount

    

    const handleorder = () => {
        dispatch(createorderAsync(
            { address, city, country, phone, postalCode,cartItems,taxPrice:0,
                shippingPrice:0, totalPrice }
            ))
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
    }

    //     const response = await fetch('/api/orders/add/', {
    //       method: 'POST',
    //     //   headers: {
    //     //     'Content-Type': 'application/json',
    //     //     Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    //     //   },
    //       body: JSON.stringify({
    //         orderItems: [],
    //         shippingAddress: {
    //           address,
    //           city,
    //           postalCode,
    //           country,
    //           phone,
    //         },
    //       
    //         itemsPrice: 0,
    //         taxPrice: 0,
    //         shippingPrice: 0,
    //         totalPrice: 0,
    //       }),
    //     });
    //     const data = await response.json();
    //     console.log(data);

    //   };



    return (
        <div>
            {/* bio: <input onChange={(e) => setbio(e.target.value)}></input>
      location: <input onChange={(e) => setlocation(e.target.value)}></input>
      location: <input onChange={(e) => setlocation(e.target.value)}></input>
      birth_date: <input type={'date'} onChange={(e) => setbirth_date(e.target.value)}></input> */}
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
            {/* <button onClick={()=> dispatch(createorderAsync({address,city,country,phone,postalCode}))}>continue</button> */}

            <button onClick={handleorder} >continue</button>

        </div>

    )
};
export default Shipping