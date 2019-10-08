import React from 'react';
import { Container } from 'reactstrap';
import * as d3 from 'd3'; 
import d3Tip from 'd3-tip';

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

                const width = 600 - margin.left - margin.right;
                const height = 600 - margin.top - margin.bottom;

                //---------------------------AXIS---------------------------------
                const x = d3.scaleBand()
                    .domain(data.playerContracts.map(item => item.name))
                    .range([0, width])
                    .paddingInner(0.2)
                    .paddingOuter(0.2);

                const y = d3.scaleLinear()
                    .domain( [0, d3.max(data.playerContracts, (d,i) => parseInt(d.contract["2019-2020"]))])
                    .range([height, 0]);

                const xAxis = d3.axisBottom(x);
                const yAxis = d3.axisLeft(y);

                //---------------------------TIP---------------------------------
                const formatComma = d3.format(",");

                const tip = d3Tip()
                    .attr("class", "d3-tip")
                    .offset([-2, 0])
                    .direction("n")
                    .html( d => {
                        const mainHtml = `<div id='thumbnail'><h4 style='color:steelblue'>${d.name}</h3></div>` + 
                            `<p>2019-2020: <span style='color:orangered'>$${formatComma(d.contract["2019-2020"])}</span></p>`

                        return mainHtml;
                    })


                //---------------------------BUILD SVG---------------------------------
                const svg = d3.select(this.refs.canvas).append("svg")
                    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
                    .append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

                svg.call(tip);

                //---------------------------BUILD AXIS---------------------------------
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", `translate(0, ${height})`)
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("$$$$$$$$$$$$$$$$$$$$$$")
                    

                //---------------------------USE DATA---------------------------------
                svg.selectAll("rect")
                    .data(data.playerContracts)
                    .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", (d,i) => x(d.name))
                        .attr("width", x.bandwidth)
                        .attr("y", (d,i) => y(parseInt(d.contract["2019-2020"])))
                        .attr("height", (d,i) => height - y(parseInt(d.contract["2019-2020"])))
                        .on('mouseover', tip.show)
                        .on('mouseout', tip.hide)




        //------bottom of drawBarChartTest()-----
    }

    render(){
        return(
            <Container fluid>
                <h5>TEAM BAR CHART:</h5>
                <div id="team-bar-chart" className="bar-chart" ref="canvas"></div>
                <br/>
                <span>Select year:  </span>
                <select id="year"></select>
            </Container>
        );
    }
}

export default TeamBarChart;