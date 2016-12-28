/**
*
* Phase
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class Phase extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const floatLeft = {
      float: 'left',
    };
    const paperStyle = {
      height: 400,
      width: 300,
      margin: 20,
      overflow: 'auto',
    };
    const center = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div style={floatLeft}>
        <h2 style={center}>Learn To Code</h2>
        <Paper style={paperStyle} zDepth={4}>
          <div style={{ margin: 20 }}>
            <h3 style={center}>Affirmation Of The Week</h3>
            <div>
              <h4>The Best Advice Ever</h4>
              <p>Code. Code. Code. Code. Code. Code.
                Code. Code. Code. Code. Code. Code.
              </p>
              <FlatButton
                label="Read More"
                primary={true}
                Link to={'/'}
              />
            </div>
            <div style={center}>
              <RaisedButton
                label="View All Affirmations"
                primary={true}
                Link to={'/'}
              />
            </div>
          </div>
        </ Paper>
      </div>
    );
  }
}

export default Phase;
