import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultData extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.TrainNo}</td>
                <td>{this.props.obj.Start}</td>
                <td>{this.props.obj.End}</td>
                <td>{this.props.obj.Time}</td>
                <td>{this.props.obj.Price}</td>
                <td align="center">
                    <Link to={"/UserDetails?trainId="+this.props.obj._id} className="button">SELECT</Link>
                </td>
            </tr>
        );
    }
}
export default ResultData;