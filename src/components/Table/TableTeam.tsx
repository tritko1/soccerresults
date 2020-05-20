import React from "react";
import {Card, CardText} from "material-ui/Card";
import './Table.scss';

export default class TableTeam extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Card>
                    <CardText>
                        <p>{this.props.place}</p>
                        <img
                            className={'coat'}
                            src={this.props.teamIconSrc}
                        />
                        <p id='teamName'>{this.props.teamName}</p>

                    </CardText>
                </Card>
            </div>
        );

    }

}