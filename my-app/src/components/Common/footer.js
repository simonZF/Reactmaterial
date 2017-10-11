import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {Link} from 'react-router-dom';

const iconStyles = {
  marginRight: 24,
};
const homeIcon = <ActionHome style={iconStyles} />;
const favoritesIcon = <HardwareVideogameAsset style={iconStyles}  />
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
 const styles = {
     "position":"fixed",
     "bottom":"0",
     "left":"0",
     "zIndex":"99",
     "backgroundColor":"#fff"
 }
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper style={styles} zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <Link to="/">
                <BottomNavigationItem
                  label="Home"
                  icon={homeIcon}
                  onClick={() => this.select(0)}
                />
            </Link>
            <Link to="/about">
                <BottomNavigationItem
                  label="about"
                  icon={favoritesIcon}
                  onClick={() => this.select(1)}
                />
            </Link>
            <Link to="./news">
                <BottomNavigationItem
                  label="news"
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
            </Link>

        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
