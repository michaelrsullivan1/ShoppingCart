import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';

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

	renderContent() {
		switch(this.state.selectedTab)	{
			default:
				case 0: 
					return (
					<ItemPage 
						items={items} 
						onAddToCart={this.handleAddToCart} />
					);
				case 1: 
					return this.renderCart();
		}
	}

	renderCart() {
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

		return (
			<CartPage items={cartItems} />
		);
	}

	render() {
		let { selectedTab } = this.state;
		return (
			<div className="App">
				<Nav selectedTab={selectedTab} onTabChange={this.handleTabChanged}/>
				<main className="App-content">
					{this.renderContent()}
				</main>
			</div>
		);
	}
}

export default App;
