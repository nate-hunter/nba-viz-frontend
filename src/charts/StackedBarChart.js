import React from 'react';
import { Container } from 'reactstrap';
import * as d3 from 'd3'; 

class StackedBarChart extends React.Component {

    componentDidMount(){
        // d3.json(`http://localhost:8080/api/v1/teams`)
        d3.json(`http://localhost:8080/api/v1/team/1`)
            .then(data => {
                this.drawStackedBarChart(data);
            })
    }

    drawStackedBarChart = (data) => {
        console.log("data", data)
                //---------------------------SPACE SETUP---------------------------------
                const margin = { top: 40, right: 40, bottom: 5, left: 40 };

                const width = 1000 - margin.left - margin.right;
                const height = 700 - margin.top - margin.bottom;

                const colors = ["#1E90FF", "#00BFFF", "#ADD8E6", "#DDA0DD", "#BA55D3", "#4B0082"];

                // const keys = 


    }

    render(){
        return(
            <Container fluid>
                <h5>STACKED BAR CHART:</h5>
                <div id="team-stacked-chart" className="stacked-chart" ref="canvas"></div>
                Select year: 
                <select id="year"></select>
            </Container>
        );
    }
}

export default StackedBarChart;