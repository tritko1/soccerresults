import React from 'react';
import './App.scss';
import H1 from "./components/Headers/H1/H1";
import DropDown from "./components/DropDown/DropDown";
import View from "./components/View/View";

export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            selectedView: '',
            selectedLeague: '',
            selectedSeason: '',
            selectedGameDay: ''
        }
    }

    callbackView = (childData) => {
        this.setState({selectedView: childData});
        this.setState({selectedGameDay: this.state.selectedGameDay ? '' : this.state.selectedGameDay})
    }

    callbackLeague = (childData) => {
        this.setState({selectedLeague: childData});
    }

    callbackSeason = (childData) => {
        this.setState({selectedSeason: childData});
    }

    callbackGameDay = (childData) => {
        this.setState({selectedGameDay: childData});
    }

    showResults(): Boolean {
        if (this.state.selectedView == 'getmatchdata') {
            return this.state.selectedLeague && this.state.selectedGameDay && this.state.selectedSeason;
        }
        return this.state.selectedView && this.state.selectedLeague && this.state.selectedSeason;
    }

    showGameDayComponent(): Boolean{
        return this.state.selectedView === 'getmatchdata';
    }

    render() {
        return (
            <div>
                <H1 headline={'Liga Datenbank'}/>
                <DropDown placeholder={'Ansicht'} file={'view.json'} parentCallback={this.callbackView}/>
                <DropDown placeholder={'Liga auswählen'} file={'leagues.json'} parentCallback={this.callbackLeague}/>
                <DropDown placeholder={'Saison auswählen'} file={'seasons.json'} parentCallback={this.callbackSeason}/>
                {this.showGameDayComponent() ?
                    <DropDown placeholder={'Spieltag auswählen'} file={'gameday.json'}
                              parentCallback={this.callbackGameDay}/> : ''}
                {this.showResults() ?
                    <View properties={this.state}/> : null}

            </div>
        );
    }
}
