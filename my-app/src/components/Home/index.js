import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Common/header'
import Card from './card'
import GridList from './gridlist'
import Footer from '../Common/footer'

class Home extends React.Component {
    render() {
        return (<MuiThemeProvider>
            <div>
                <Header />
                <Card />
                <GridList />
                <Footer />
            </div>
        </MuiThemeProvider>)
    }
}

export default Home
