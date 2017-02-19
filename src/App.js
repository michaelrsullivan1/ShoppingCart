import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';

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
				case 1: return <span>Cart</span>;
		}
	}

	render() {
		let { selectedTab } = this.state;
		return (
			<div className="App">
				<Nav selectedTab={selectedTab} onTabChange={this.handleTabChanged}/>
				<main className="App-content">
					{this.state.cart.length} items
					{this.renderContent()}
				</main>
			</div>
		);
	}
}

export default App;
