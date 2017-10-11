import React from "react";
import ReactDom from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../Common/header';
import Footer from '../Common/footer';
import Tabs from "./tabs"

export default class About extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
            <div>
                <Tabs/>
                <Footer/>
            </div>
            </MuiThemeProvider>
        )
    }
}
