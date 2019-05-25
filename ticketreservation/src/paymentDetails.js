import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";

export default class paymentDetails extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeCVC = this.onChangeCVC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            userID:'',
            Name:'',
            Amount:'',
            CardNumber:'',
            CVC:'',
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

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeCardNumber(e) {
        this.setState({
            CardNumber: e.target.value
        })
    }
    onChangeCVC(e) {
        this.setState({
            CVC: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            userID: queryString.parse(this.props.location.search).user,
            Name: this.state.Name,
            Amount: (this.state.result.Price)*(queryString.parse(this.props.location.search).passengers),
            CardNumber: this.state.CardNumber,
            CVC: this.state.CVC
        };
        axios.post('http://localhost:4000/payments/pay', obj)
            .then(res => {
                this.setState({
                    id:res.data.id,
                });
                window.location.href = "/TicketDetails?trainId="+this.state.result._id+
                    "&passengers="+queryString.parse(this.props.location.search).passengers+
                    "&user="+queryString.parse(this.props.location.search).user+
                    "&paymentID="+this.state.id;
            });
    }

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="trainDetails">
                        <h1>Ticket Details</h1>
                        <table width="100%">
                            <tr>
                                <th>Train Number</th>
                                <td>{this.state.result.TrainNo}</td>
                            </tr>
                            <tr>
                                <th>Departure</th>
                                <td>{this.state.result.Start}</td>
                            </tr>
                            <tr>
                                <th>Destination</th>
                                <td>{this.state.result.End}</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <td>{this.state.result.Time}</td>
                            </tr>
                            <tr>
                                <th>Price for {queryString.parse(this.props.location.search).passengers} passenger</th>
                                <td>{(this.state.result.Price)*(queryString.parse(this.props.location.search).passengers)}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="userForm">
                        <form onSubmit={this.onSubmit}>
                            <h1>Please Enter card details</h1>
                                <div>
                                    <label>CREDIT CARD NUMBER:</label>
                                    <div>
                                        <input
                                            name="credit"
                                            type="text"
                                            placeholder="credit card"
                                            value={this.state.CardNumber}
                                            onChange={this.onChangeCardNumber}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>CVC NUMBER:</label>
                                    <div>
                                        <input
                                            name="cvc"
                                            type="text"
                                            placeholder="cvc"
                                            value={this.state.CVC}
                                            onChange={this.onChangeCVC}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label>CARD HOLDER:</label>
                                    <div>
                                        <input
                                            name="card holder"
                                            type="text"
                                            placeholder="card holder"
                                            value={this.state.Name}
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
