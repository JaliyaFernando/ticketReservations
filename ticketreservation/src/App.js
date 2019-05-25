import React, {Component} from 'react';
import './App.css';
import Main from './main';
import Footer from './footer';
import Header from './header';

class App extends Component{
    render() {
        return(
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }

}

export default App;
