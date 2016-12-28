/**
*
* CreatePost
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';

class CreatePost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const paperStyle = {
      height: 600,
      width: 600,
      margin: 20,
      overflow: 'auto',
    };
    const center = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div>
        <h2 style={center}>Submit an Affirmation</h2>
        <div style={center}>
          <div>
            <Paper style={paperStyle} zDepth={4}>
              <div style={{ margin: 20 }}>
                <TextField
                  type="text"
                  hintText="This is a example title"
                  floatingLabelText="Please input a title for your affirmation"
                  fullWidth={true}
                /><br />
                <TextField
                  hintText="ex. This is the best advice you will ever receive!"
                  floatingLabelText="Please spread your knowledge and experience to our community. :D"
                  fullWidth={true}
                  multiLine={true}
                  rows={8}
                />
                <Toggle
                  label="Anonymous?"
                />
                <div style={center}>
                  <RaisedButton
                    label="Submit Affirmation"
                    labelPosition="before"
                    primary={true}
                    icon={<AddCircleOutline />}
                    Link to={'/'}
                  />
                </div>
              </div>
            </ Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
