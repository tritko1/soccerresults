import React from 'react'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Game} from "./Game";


export default class Games extends React.Component<any, any>{

    constructor(props: any){
        super(props);

        this.state = {
            games: [],
            url: props.url
        };
    }

    fetchAllGames(){
        if (!this.props.url){}
        axios.get(this.props.url)
            .then(result => {
                this.setState({
                    games: result.data
                });
            })
            .catch(error => {
                return error;
            });
    }

    componentDidMount(){
        this.fetchAllGames();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        this.fetchAllGames();
    }

    render(){
        const listOfGames = this.state.games.map((game: any, index: any) => {
            const props = {
                key: game.MatchID,
                homeiconsrc: game.Team1.TeamIconUrl,
                guesticonsrc: game.Team2.TeamIconUrl,
                hometeamname: game.Team1.TeamName,
                guestteamname: game.Team2.TeamName,
                isGameFinished: game.MatchIsFinished,
                hometeamgoals: game.MatchResults[1] != null ? game.MatchResults[1].PointsTeam1 : '',
                guestteamgoals: game.MatchResults[1] != null ? game.MatchResults[1].PointsTeam2 : ''
            }

            return (
                <Game {...props}/>
            );
        });

        return(
            <MuiThemeProvider>
                <div>
                    {listOfGames}
                </div>
            </MuiThemeProvider>
        );
    }
}