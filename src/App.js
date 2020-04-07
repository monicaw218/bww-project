import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import OverallChart from './OverallChart';

const bwwJsonLink = 'https://s3.us-east-2.amazonaws.com/bww-1/BuffaloWildWings2.json';
const controlJsonLink = 'https://s3.us-east-2.amazonaws.com/bww-1/USNicheGradeSample.json';
const bwwLogo = 'https://i2.wp.com/lakewoodchamber.com/wp-content/uploads/2017/06/bug-1.png?fit=600%2C600&ssl=1';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bwwAreas: [],
            controlAreas: []
        }
    }
	
	componentWillMount() {
		axios.get(bwwJsonLink).then(res => { this.setState({ bwwAreas: res.data })});
		axios.get(controlJsonLink).then(res => { this.setState({ controlAreas: res.data })});
	}

	 numberWithCommas = (x) => {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	 }

	render() {
		return (
			<div className="App">
				<header className="App-header" >
					<img src={bwwLogo} className="App-logo" alt="BWW Logo" />
					<h1 className="App-title">The Buffalo Wild Wings Project</h1>
				</header>

			<p className="App-intro">Project to test the hypothesis that neighborhoods are better where BWWs are built</p>

			<div className="container">
				<div className="row">
					<div className="col">
						<h2><strong>{this.numberWithCommas(this.state.bwwAreas.length-3)}</strong></h2>
						<h4>BWW Locations</h4>
						</div>
					<div className="col">
						<h2><strong>{this.numberWithCommas((this.state.bwwAreas.length-3)*2*12)}</strong></h2>
						<h4>Area Ratings</h4>
					</div>
					<div className="col">
						<h2><strong>Never too many</strong></h2>
						<h4>Buffalo Wings</h4>
					</div>
				</div>
			</div>
			
			<br/><br/>

			<OverallChart />
			<br/><br/>


			<div className="container">
				<iframe src="https://public.tableau.com/views/BuffaloWildWings/BWWControlGroupLocations?:embed=y&:display_count=yes"
					width="90%" height="725px" title="tableauMap">
				</iframe>
			</div>

			</div>
		);
	}
}

export default App;
