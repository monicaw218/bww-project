import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import OverallChart from './OverallChart';

const bww_api = 'https://s3.us-east-2.amazonaws.com/bww-1/BuffaloWildWings2.json';
const control_api = 'https://s3.us-east-2.amazonaws.com/bww-1/USNicheGradeSample.json';
const bwwlogo = 'https://i2.wp.com/lakewoodchamber.com/wp-content/uploads/2017/06/bug-1.png?fit=600%2C600&ssl=1';

class App extends Component {
	state = {
		bwwareas: [],
		controlareas: []
	}
	
	componentWillMount() {
		axios.get(bww_api).then(res => { this.setState({ bwwareas: res.data})});
		axios.get(control_api).then(res => { this.setState({ controlareas: res.data})});
	}
	
	// componentDidMount() { }

	render() {
		// var mysql = require('mysql');

		const numberWithCommas = (x) => { 
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		};
		
		return (
			<div class="App">
				<header class="App-header" >
					<img src={bwwlogo} class="App-logo" alt="bwwlogo" />
					<h1 class="App-title">The Buffalo Wild Wings Project</h1>
				</header>

			<p class="App-intro">Project to test the hypothesis that neighborhoods are better where BWWs are built</p>

			<div class="container">
				<div class="row">
					<div class="col">
						<h2><strong>{numberWithCommas(this.state.bwwareas.length-3)}</strong></h2>
						<h4>BWW Locations</h4>
						</div>
					<div class="col">
						<h2><strong>{numberWithCommas((this.state.bwwareas.length-3)*2*12)}</strong></h2>
						<h4>Area Ratings</h4>
					</div>
					<div class="col">
						<h2><strong>Never too many</strong></h2>
						<h4>Buffalo Wings</h4>
					</div>
				</div>
			</div>
			
			<br/><br/>

			<OverallChart />
			<br/><br/>


			<div class="container">
				<iframe src="https://public.tableau.com/views/BuffaloWildWings/BWWControlGroupLocations?:embed=y&:display_count=yes"
					width="100%" height="725" allowfullscreen="allowfullscreen" title="tableauMap">
				</iframe>
			</div>

			</div>
		);
	}
}

export default App;
