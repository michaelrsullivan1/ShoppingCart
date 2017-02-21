import React from 'react';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onRemoveOne, onAddOne, cartTotal }) {
	return (
	<div>
		<ul className="CartPage-items">
			{items.map(item =>
				<li key={item.id} className="CartPage-item">
					<Item item={item}>
						<div className="CartItem-contrals">
							<button
								className="CartItem-removeOne"
								onClick={onRemoveOne.bind(null, item)}>&ndash;
							</button>
							<span className="CartItem-count">{item.count}</span>
							<button
								className="CartItem-addOne"
								onClick={onAddOne.bind(null, item)}>+
							</button>
							
						</div>
					</Item>
				</li>
			)}
		</ul>
		<h3 className="cart-total">Total: ${cartTotal}</h3>
	</div>
	);
}

CartPage.propTypes = {
	items: React.PropTypes.array.isRequired,
	onAddOne: React.PropTypes.func.isRequired,
	onRemoveOne: React.PropTypes.func.isRequired,
	cartTotal: React.PropTypes.number.isRequired,
};

export default CartPage;
