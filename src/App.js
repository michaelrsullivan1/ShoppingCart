import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';
import CartEmpty from './CartEmpty';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 0,
			cart: []
		};
	}

	handleTabChanged = (index) => {
		this.setState({selectedTab: index});
	}

	handleAddToCart = (item) => {
		this.setState({
			cart: [...this.state.cart, item.id]
		});	
	}

	handleRemoveOne = (item) => {
		let index = this.state.cart.indexOf(item.id);
		this.setState({
			cart: [
				...this.state.cart.slice(0, index),
				...this.state.cart.slice(index + 1)
			]
		});
	}


	renderContent(cartCount, cartTotal) {
		switch(this.state.selectedTab)	{
			default:
				case 0: 
					return (
					<ItemPage 
						items={items} 
						onAddToCart={this.handleAddToCart} />
					);
				case 1: 
					return this.renderCart(cartCount, cartTotal);
		}
	}

	renderCart(cartCount, cartTotal) {
		//Count how many items are in the cart
		let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
			itemCounts[itemId] = itemCounts[itemId] || 0;
			itemCounts[itemId]++;
			return itemCounts;	
		}, {});


		let cartItems = Object.keys(itemCounts).map(itemId => {
			//Find the item by its id
			var item = items.find(item =>
					item.id === parseInt(itemId, 10)
			);

			//Create a new "item" that also has a 'count' property
			return {
				...item, 
				count: itemCounts[itemId]
			}
		});


		if (!cartCount) {
			return <CartEmpty />
		}

		return (
			<CartPage 
				items={cartItems} 
				onAddOne={this.handleAddToCart}
				onRemoveOne={this.handleRemoveOne}
			       	cartTotal={cartTotal}	
				/>
		);
	}

	render() {
		let { selectedTab } = this.state;

		let cartTotal = this.state.cart.reduce((total, itemId) => {
			var price = items.find(item =>
				item.id === itemId
			);
			return total + price.price;
		}, 0);

		let cartCount = this.state.cart.length;


		return (
			<div className="App">
				<Nav selectedTab={selectedTab} onTabChange={this.handleTabChanged} cartCount={cartCount} cartTotal={cartTotal}/>
				<main className="App-content">
					{this.renderContent(cartCount, cartTotal)}
				</main>
			</div>
		);
	}
}

export default App;
