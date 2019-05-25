import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";

export default class paymentDetails extends Component {
    constructor(props) {
        super(props);
        this.onChangeNoOfPassengers = this.onChangeNoOfPassengers.bind(this);
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            NoOfPassengers:'',
            FName:'',
            LName:'',
            Email:'',
            Mobile:'',
            result:[],
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

    onChangeNoOfPassengers(e) {
        this.setState({
            NoOfPassengers: e.target.value
        });
    }
    onChangeFName(e) {
        this.setState({
            FName: e.target.value
        })
    }
    onChangeLName(e) {
        this.setState({
            LName: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }
    onChangeMobile(e) {
        this.setState({
            Mobile: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            FName: this.state.FName,
            LName: this.state.LName,
            Email: this.state.Email,
            Mobile: this.state.Mobile
        };
        axios.post('http://localhost:4000/users/addUser', obj)
            .then(res => {
                this.setState({
                    message:res.data.message,
                });
                if(res.data.message.toString() === "User Added"){
                    this.setState({
                        message:'',
                    });
                    /*
                                        window.location.href = "/PaymentDetails?trainId="+this.state.trains._id+"&passengers="+this.props.passengers+"&userNic="+obj.NIC;
                    */
                }
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
                                <label>First Name</label>
                                <div>
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        value={this.state.FName}
                                        onChange={this.onChangeFName}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <div>
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={this.state.LName}
                                        onChange={this.onChangeLName}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={this.state.Email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Mobile</label>
                                <div>
                                    <input
                                        name="mobile"
                                        type="text"
                                        placeholder="mobile"
                                        value={this.state.Mobile}
                                        onChange={this.onChangeMobile}
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
