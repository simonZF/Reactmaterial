import React from "react";
import ReactDom from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../Common/header';
import Footer from '../Common/footer';
import NewsList from "./newsList";

export default class News extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
            <div>
                <NewsList/>
                <Footer/>
            </div>
            </MuiThemeProvider>
        )
    }
}
