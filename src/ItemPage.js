import React from 'react';
import Item from './Item';
import './ItemPage.css';

function ItemPage({ items, onAddToCart  }) {
	return (
		<ul className="ItemPage-items">
			{items.map(item =>
				<li key={item.id} className="ItemPage-item">
					<Item item={item}>
						<button 
							className="Item-addToCart"
							onClick={onAddToCart.bind(null, item)}>
							Add to Cart
						</button>
					</Item>
				</li>
			)}
		</ul>
	);
}

ItemPage.propTypes = {
	items: React.PropTypes.array.isRequired,
	onAddToCart: React.PropTypes.func.isRequired
};

export default ItemPage;
