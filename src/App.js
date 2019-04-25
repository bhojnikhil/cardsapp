import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots.js';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
class App extends Component {

	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield : ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}

	onSearchChange= (event) =>{
		this.setState({searchfield:event.target.value})
	}

	render(){
		const filteredrobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
	return(
		<div className='tc'>
			<h1>Dudes</h1>
			<SearchBox onSearchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredrobots}/>
			</Scroll>
		</div>
		);
	}
}		

export default App;