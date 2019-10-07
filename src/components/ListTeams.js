import React from 'react';
import { Container, Table } from 'reactstrap';

/*


*/

const ListTeams = (props) => {

    const URL = "https://www.basketball-reference.com";

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    let compare = (a, b) => {
        const teamA = a.teamAbbr;
        const teamB = b.teamAbbr;
        let comparison = 0;
        if (teamA > teamB) {
            comparison = 1;
        } else if (teamA < teamB) {
            comparison = -1;
        }
        return comparison;
    }

    props.teams.sort(compare);

    const teamList = props.teams.map(team => {
        
        let y1 = 0;
        let y2 = 0;
        let y3 = 0;
        let y4 = 0;
        let y5 = 0;
        let y6 = 0; 

        team.playerContracts.forEach(pc => {
            parseInt(pc.contract["2019-2020"]) ? y1 += parseInt(pc.contract["2019-2020"]) : y1 += 0;
            parseInt(pc.contract["2020-2021"]) ? y2 += parseInt(pc.contract["2020-2021"]) : y2 += 0;
            parseInt(pc.contract["2021-2022"]) ? y3 += parseInt(pc.contract["2021-2022"]) : y3 += 0;
            parseInt(pc.contract["2022-2023"]) ? y4 += parseInt(pc.contract["2022-2023"]) : y4 += 0;
            parseInt(pc.contract["2023-2024"]) ? y5 += parseInt(pc.contract["2023-2024"]) : y5 += 0;
            parseInt(pc.contract["2024-2025"]) ? y6 += parseInt(pc.contract["2024-2025"]) : y6 += 0;
        })

        return (
            <tr key={team.id}>
                <td className="team-logo-list"><img src={team.logo} alt="team-logo"></img></td>
                <td style ={{whiteSpace: 'nowrap'}}><a href={URL + team.link}>{team.teamName}</a></td>
                <td>${formatNumber(y1)}</td>
                <td>${formatNumber(y2)}</td>
                <td>${formatNumber(y3)}</td>
                <td>${formatNumber(y4)}</td>
                <td>${formatNumber(y5)}</td>
                <td>${formatNumber(y6)}</td>
                <td>${formatNumber(y1+y2+y3+y4+y5+y6)}</td>
            </tr>
        )
        
    })

    return(
        <div>
        <Container fluid>
            <Table className="mt-4" size="sm" hover responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>TEAM</th>
                        <th>2019-2020</th>
                        <th>2020-2021</th>
                        <th>2021-2022</th>
                        <th>2022-2023</th>
                        <th>2023-2024</th>
                        <th>2024-2025</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {teamList}
                </tbody>
            </Table>
        </Container>
        </div>
    )
}

export default ListTeams;


