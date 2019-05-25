import React, { Component } from 'react';
import image from "./images/thumb-1920-565118.jpg";

export default class search extends Component {
    constructor(props) {
        super(props);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            from:'',
            to:'',
        };
    }
    onChangeFrom(e) {
        this.setState({
            from: e.target.value
        });
    }
    onChangeTo(e) {
        this.setState({
            to: e.target.value
        })
    }
    onSubmit(e) {
    }
    render() {
        return(
        <div className="row">
            <div className="col-35">
                <form action="/Result">
                    <label><b>Start Station</b></label>
                    <select
                        name="from"
                        value={this.state.from}
                        onChange={this.onChangeFrom}
                    >
                        <option value="Dehiwala">Dehiwala</option>
                        <option value="Kandana">Kandana</option>
                        <option value="Galle">Galle</option>
                        <option value="Ragama">Ragama</option>
                        <option value="Moratuwa">Moratuwa</option>
                    </select>
                    <label><b>End Station</b></label>
                    <select
                        name="to"
                        value={this.state.to}
                        onChange={this.onChangeTo}
                    >
                        <option value="Panadura">Panadura</option>
                        <option value="Ragama">Ragama</option>
                        <option value="ColomboFort">Colombo Fort</option>
                        <option value="Moratuwa">Moratuwa</option>
                        <option value="Galle">Galle</option>
                    </select>
                    <input type="submit" value="Search"/>
                </form>
            </div>

            <div className="col-65">
                <img src={image} alt="train"/>
            </div>
        </div>
        )
    }
}
