import React, {useState} from 'react'
import {FaShoppingBasket} from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    return(<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Empty</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>
                    Cosmicorp.
                </span>
                <ul className='nav'>
                    <li><a href='#' class='active'>Home</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Contacts</a></li>
                    <li><a href='#'>Profile</a></li>
                </ul>
                <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}