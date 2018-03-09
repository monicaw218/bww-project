import React, { Component } from 'react';
import './App.css';
import bwwdata from './BuffaloWildWings2.json';
import zipdata from './USNicheGradeSample.json';
import Highcharts from 'react-highcharts';

const bwwlogo = 'https://i2.wp.com/lakewoodchamber.com/wp-content/uploads/2017/06/bug-1.png?fit=600%2C600&ssl=1';

class App extends Component {

	render() {
		const config = {
				chart: {
					type: 'column'
				},
				title: {
					text: 'Grades by Zip Code'
				},
				subtitle: {
					text: 'Source: Niche.com'
				},
				xAxis: {
					categories: [
						'A+',
						'A',
						'A-',
						'B+',
						'B',
						'B-',
						'C+',
						'C',
						'C-',
						'D+',
						'D',
						'D-'
					],
					crosshair: true
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Frequency'
					}
				},
				tooltip: {
					headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
					pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
						'<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
					footerFormat: '</table>',
					shared: true,
					useHTML: true
				},
				plotOptions: {
					column: {
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				series: [{
					name: 'Buffalo Wild Wings',
					data: [190, 325, 279, 227, 140, 37, 7, 0, 0, 0, 0, 0]

				}, {
					name: 'Control Group',
					data: [36, 69, 91, 119, 172, 232, 192, 125, 76, 13, 5, 10]
				}]
		}
		return (
		<div className="App">
		<header className="App-header">
			<img src={bwwlogo} className="App-logo" alt="bwwlogo" />
			<h1 className="App-title">The Buffalo Wild Wings Project</h1>
		</header>
		<p className="App-intro">
			Project to test the hypothesis that neighborhoods are better where BWWs are built
		</p>
	
		<Highcharts config={config} />
		
		<table>
			<tbody>
				<th>City</th>
				<th>State</th>
				<th>Postal Code</th>
				<th>Overall Niche</th>
				{
					bwwdata
					.sort((a,b) => a.State < b.State)
					.map( (item) =>
						<tr>
							<td>{item.City}</td>
							<td>{item.State}</td>
							<td>{item["Postal Code"]}</td>
							<td>{item["Overall Niche Grade"]}</td>
						</tr>
					)
				}
			</tbody>
		</table>
	  </div>
    );
  }
}

export default App;
