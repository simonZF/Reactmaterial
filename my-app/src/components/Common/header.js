import React from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from "./drawer";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const styles = {
    "textAlign":"center"
}

export default class AppBarExampleIcon extends React.Component{
    handleLeftIcon(){
        this.refs.drawer1.handleToggle();
    }
    render(){
        return(
            <div>
                <AppBar
                    title="React 小站"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleLeftIcon.bind(this)}
                    titleStyle={styles}
                 />
                 <Drawer ref="drawer1"/>
            </div>
        );
    }
}
