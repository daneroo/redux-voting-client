import React from 'react';
import {RouteHandler} from 'react-router';


export default React.createClass({
  // no PureRenderMixin
  render: function() {
    return <RouteHandler />
  }
});
