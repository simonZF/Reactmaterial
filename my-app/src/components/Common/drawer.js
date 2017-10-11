import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
            <List>
                <ListItem onTouchTap={this.handleClose} primaryText="主页" leftIcon={<ContentInbox />} />
                <Divider />
                <ListItem onTouchTap={this.handleClose} primaryText="关于我们" leftIcon={<ContentInbox />} />
            </List>
        </Drawer>
      </div>
    );
  }
}
