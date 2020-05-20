import React, {Component} from "react";
import Games from "../Results/Games";
import TableTeams from "../Table/TableTeams";
import {getURL} from "next/dist/next-server/lib/utils";

export default class View extends Component<any, any> {
    apiURL = 'https://www.openligadb.de/api/';

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.properties['selectedView']);
        return (this.props.properties['selectedView'] == 'getmatchdata' ?
            <Games url={this.getJsonURL()} /> : <TableTeams url={this.getJsonURL()} />
        );
    }

    getJsonURL(){
        return `${this.apiURL}${this.props.properties['selectedView']}/${this.props.properties['selectedLeague']}/${this.props.properties['selectedSeason']}/${this.props.properties['selectedGameDay']}`;
}

}