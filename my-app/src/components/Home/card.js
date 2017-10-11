import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" />
    </CardMedia>

  </Card>
);

export default CardExampleWithAvatar;
