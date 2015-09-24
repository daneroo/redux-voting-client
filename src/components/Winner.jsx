import React from 'react';
import {addons} from 'react/addons'; 
const {PureRenderMixin} = addons;

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
});
