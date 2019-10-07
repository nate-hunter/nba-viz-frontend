import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ListTeams from './ListTeams'
import ListPlayers from './ListPlayers';
import TeamBarChart from '../charts/TeamBarChart'

class DataContainer extends React.Component {
    
    render(){

        // console.log("dC",this.props.data);

        const players = this.props.data.map(d => {
            let list = [];
            list.push(d.playerContracts)
            return <ListPlayers players={list} />;
        })

        return(
            <Container className="team-list-container">
                <Row>
                    <Col xs="6"><ListTeams teams={this.props.data}/></Col>
                    <Col xs="6"><TeamBarChart data={this.props.data}/></Col>
                </Row>

                <ListPlayers players={this.props.data.playerContracts} />
                {/* {players} */}
            </Container>
        );
    }
}

export default DataContainer;