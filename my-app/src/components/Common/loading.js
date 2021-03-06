import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
    textAlign:"center"
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    boxShadow:"none"
  },
};

const RefreshIndicatorExampleLoading = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
  </div>
);

export default RefreshIndicatorExampleLoading;
