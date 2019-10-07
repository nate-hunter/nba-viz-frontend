import React from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';


const ListPlayers = (props) => {

    const URL = "https://www.basketball-reference.com";

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    // const playerList = props.
    // console.log("playerlist",props)
    return(
        <Container fluid>
            LIST OF PLAYERS
        </Container>
    );
}

export default ListPlayers;