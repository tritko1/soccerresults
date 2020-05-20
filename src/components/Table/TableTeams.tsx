import React from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TableTeam from "./TableTeam";

export default class TableTeams extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            tableTeams: [],
            url: props.url,
        };
    }

    fetchTable() {
        if (!this.props.url) {
        }
        axios.get(this.props.url)
            .then(result => {
                this.setState({
                    tableTeams: result.data
                });
            })
            .catch(error => {
                return error;
            });
    }

    componentDidMount() {
        this.fetchTable();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        this.fetchTable();
    }

    render() {
        const listOfTableTeams = this.state.tableTeams.map((tableTeam: any, index: any) => {
            const props = {
                place: index + 1,
                teamIconSrc: tableTeam.TeamIconUrl,
                teamName: tableTeam.TeamName,
                matches: tableTeam.Matches,
                won: tableTeam.Won,
                draw: tableTeam.Draw,
                lost: tableTeam.Lost,
                goals: tableTeam.Goals,
                opponentGoals: tableTeam.OpponentGoals,
                points: tableTeam.Points
            }
            return (
                <TableTeam {...props}/>
            );
        });
        return (
            <MuiThemeProvider>
                <div>
                    {listOfTableTeams}
                </div>
            </MuiThemeProvider>
        );
    }
}