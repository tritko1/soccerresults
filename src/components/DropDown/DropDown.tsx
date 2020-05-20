import React from "react";
import {Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import './DropDown.scss';

export default class DropDown extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // @ts-ignore
    handleChange = (_e: any, {value}: any) => this.props.parentCallback(value);


    componentDidMount() {
        fetch(this.props.file)
            .then(response => response.json())
            .then(result => {
                const values = result.map(item => {
                    return item;
                })
                this.setState({values: values});
            });
    }

    render() {
        const { value , onChangeValue, placeholder } = this.props;
        return (<Dropdown placeholder={placeholder} options={this.state.values}
                          onChange={this.handleChange} value={value}
                          fluid
                          selection/>);
    }
}