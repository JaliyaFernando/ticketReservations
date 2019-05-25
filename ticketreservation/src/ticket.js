import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";

export default class paymentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result:[],
            id:''
        };
    }
    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        console.log(values);
        axios.get('http://localhost:4000/trains/'+values.trainId)
            .then(response => {
                this.setState({
                    result: response.data
                });
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (<div>
                    <div>
                        <h1>Your Reservation is Successfully Done</h1>
                        <h1>Your Ticket Details</h1>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th  align="left">Train Number</th>
                                <td  align="left">{this.state.result.TrainNo}</td>
                            </tr>
                            <tr>
                                <th  align="left">Departure</th>
                                <td  align="left">{this.state.result.Start}</td>
                            </tr>
                            <tr>
                                <th  align="left">Destination</th>
                                <td  align="left">{this.state.result.End}</td>
                            </tr>
                            <tr>
                                <th  align="left">Time</th>
                                <td  align="left">{this.state.result.Time}</td>
                            </tr>
                            <tr>
                                <th  align="left">Price for {queryString.parse(this.props.location.search).passengers} passenger</th>
                                <td  align="left">{(this.state.result.Price)*(queryString.parse(this.props.location.search).passengers)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
}
