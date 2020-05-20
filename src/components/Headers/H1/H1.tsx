import {Header} from "semantic-ui-react";
import React from "react";

export default class H1 extends React.Component<any, any>  {
    render() {
        return (<Header as={'h1'}>{this.props.headline}</Header>);

    }

}