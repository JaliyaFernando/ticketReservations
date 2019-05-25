import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";
import ResultData from './resultData';

export default class result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from:'',
            to:'',
            trains:[],
        };
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        console.log(values);
        axios.get('http://localhost:4000/trains/search/'+values.from+'/'+values.to)
            .then(response => {
                this.setState({
                    trains: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getData(){
        return this.state.trains.map((train,i) => {
            return (
                <ResultData  obj={train} key={i} />
            )
        });
    }
    render() {
        console.log(this.state.trains.TrainNo);
        return (<div className="form">
                <h3 align="center">Available Trains </h3>
                <table>
                    <thead>
                    <tr>
                        <th>Train Number</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.getData() }
                    </tbody>
                </table>
            </div>
        );
    }
}
