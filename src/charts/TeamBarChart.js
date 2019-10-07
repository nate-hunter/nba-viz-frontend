import React from 'react';
import { Container } from 'reactstrap';
import * as d3 from 'd3'; 

class TeamBarChart extends React.Component {

    componentDidMount(){
        // d3.json(`http://localhost:8080/api/v1/teams`)
        d3.json(`http://localhost:8080/api/v1/team/1`)
            .then(data => {
                this.drawBarChart(data);
            })
    }

    drawBarChart = (data) => {
        console.log("data", data)
                //---------------------------SPACE SETUP---------------------------------
                const margin = { top: 40, right: 40, bottom: 5, left: 40 };

                const width = 1000 - margin.left - margin.right;
                const height = 700 - margin.top - margin.bottom;



    }

    render(){
        return(
            <Container fluid>
                <h5>TEAM BAR CHART:</h5>
                <div id="team-bar-chart" className="bar-chart" ref="canvas"></div>
                Select year: 
                <select id="year"></select>
            </Container>
        );
    }
}

export default TeamBarChart;