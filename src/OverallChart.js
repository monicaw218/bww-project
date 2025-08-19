import { Component } from 'react';
import './App.css';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/modules/accessibility';

const bwwJsonLink = 'https://s3.us-east-2.amazonaws.com/bww-1/BuffaloWildWings2.json';
const controlJsonLink = 'https://s3.us-east-2.amazonaws.com/bww-1/USNicheGradeSample.json';

class OverallChart extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bwwAreas: [], controlAreas: [],
			bwwAPlus: [], bwwA: [], bwwAMinus: [],
			bwwBPlus: [], bwwB: [], bwwBMinus: [],
			bwwCPlus: [], bwwC: [], bwwCMinus: [],
			bwwDPlus: [], bwwD: [], bwwDMinus: [],

			controlAPlus: [], controlA: [], controlAMinus: [],
			controlBPlus: [], controlB: [], controlBMinus: [],
			controlCPlus: [], controlC: [], controlCMinus: [],
			controlDPlus: [], controlD: [], controlDMinus: []
		}

		axios.get(bwwJsonLink)
			.then(res => {
				const bwwAreas = res.data;
				const bwwAPlus = bwwAreas.filter(item => item['Overall Niche Grade'] === "A+");
				const bwwA = bwwAreas.filter(item => item['Overall Niche Grade'] === "A");
				const bwwAMinus = bwwAreas.filter(item => item['Overall Niche Grade'] === "A-");
				const bwwBPlus = bwwAreas.filter(item => item['Overall Niche Grade'] === "B+");
				const bwwB = bwwAreas.filter(item => item['Overall Niche Grade'] === "B");
				const bwwBMinus = bwwAreas.filter(item => item['Overall Niche Grade'] === "B-");
				const bwwCPlus = bwwAreas.filter(item => item['Overall Niche Grade'] === "C+");
				const bwwC = bwwAreas.filter(item => item['Overall Niche Grade'] === "C");
				const bwwCMinus = bwwAreas.filter(item => item['Overall Niche Grade'] === "C-");
				const bwwDPlus = bwwAreas.filter(item => item['Overall Niche Grade'] === "D+");
				const bwwD = bwwAreas.filter(item => item['Overall Niche Grade'] === "D");
				const bwwDMinus = bwwAreas.filter(item => item['Overall Niche Grade'] === "D-");

				this.setState({
					bwwAreas: bwwAreas,
					bwwAPlus: bwwAPlus, bwwA: bwwA, bwwAMinus: bwwAMinus,
					bwwBPlus: bwwBPlus, bwwB: bwwB, bwwBMinus: bwwBMinus,
					bwwCPlus: bwwCPlus, bwwC: bwwC, bwwCMinus: bwwCMinus,
					bwwDPlus: bwwDPlus, bwwD: bwwD, bwwDMinus: bwwDMinus
				});

			});
	}

	componentDidMount() {
		axios.get(controlJsonLink)
			.then(res => {
				const controlAreas = res.data;
				const controlAPlus = controlAreas.filter(item => item['Overall Niche Grade'] === "A+");
				const controlA = controlAreas.filter(item => item['Overall Niche Grade'] === "A");
				const controlAMinus = controlAreas.filter(item => item['Overall Niche Grade'] === "A-");
				const controlBPlus = controlAreas.filter(item => item['Overall Niche Grade'] === "B+");
				const controlB = controlAreas.filter(item => item['Overall Niche Grade'] === "B");
				const controlBMinus = controlAreas.filter(item => item['Overall Niche Grade'] === "B-");
				const controlCPlus = controlAreas.filter(item => item['Overall Niche Grade'] === "C+");
				const controlC = controlAreas.filter(item => item['Overall Niche Grade'] === "C");
				const controlCMinus = controlAreas.filter(item => item['Overall Niche Grade'] === "C-");
				const controlDPlus = controlAreas.filter(item => item['Overall Niche Grade'] === "D+");
				const controlD = controlAreas.filter(item => item['Overall Niche Grade'] === "D");
				const controlDMinus = controlAreas.filter(item => item['Overall Niche Grade'] === "D-");

				this.setState({
					controlAreas: controlAreas,
					controlAPlus: controlAPlus, controlA: controlA, controlAMinus: controlAMinus,
					controlBPlus: controlBPlus, controlB: controlB, controlBMinus: controlBMinus,
					controlCPlus: controlCPlus, controlC: controlC, controlCMinus: controlCMinus,
					controlDPlus: controlDPlus, controlD: controlD, controlDMinus: controlDMinus
				});
			})
	}

	render() {
		const config = {
			chart: { type: 'column' },
			title: { text: 'Overall Grades by Zip Code' },
			subtitle: { text: 'Source: Niche.com' },
			xAxis: {
				categories: [
					'A+', 'A', 'A-',
					'B+', 'B', 'B-',
					'C+', 'C', 'C-',
					'D+', 'D', 'D-'
				],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: { text: 'Frequency' }
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
			colors: ['#ffd200', '#434348'],

			series: [{
				name: 'Buffalo Wild Wings',
				data: [this.state.bwwAPlus.length,
				this.state.bwwA.length,
				this.state.bwwAMinus.length,
				this.state.bwwBPlus.length,
				this.state.bwwB.length,
				this.state.bwwBMinus.length,
				this.state.bwwCPlus.length,
				this.state.bwwC.length,
				this.state.bwwCMinus.length,
				this.state.bwwDPlus.length,
				this.state.bwwD.length,
				this.state.bwwDPlus.length]
			}, {
				name: 'Control Group',
				data: [this.state.controlAPlus.length,
				this.state.controlA.length,
				this.state.controlAMinus.length,
				this.state.controlBPlus.length,
				this.state.controlB.length,
				this.state.controlBMinus.length,
				this.state.controlCPlus.length,
				this.state.controlC.length,
				this.state.controlCMinus.length,
				this.state.controlDPlus.length,
				this.state.controlD.length,
				this.state.controlDMinus.length
				]
			}],
			accessibility: {
				description: "This is a bar graph showing the overall grades of Buffalo Wild Wings areas compared to a control group.",
			}
		}

		return (<HighchartsReact highcharts={Highcharts} options={config} />)
	}
}

export default OverallChart;
