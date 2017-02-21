import React from 'react';
import './CartEmpty.css';

function CartEmpty() {
	return (
		<div className="cart-empty">
			<p>Your cart appears to be empty</p>
			<p>Why not add some products to it?</p>
		</div>
	);
}	

export default CartEmpty;
