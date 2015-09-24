import React from 'react';
import {addons} from 'react/addons'; 
const {PureRenderMixin} = addons;
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});