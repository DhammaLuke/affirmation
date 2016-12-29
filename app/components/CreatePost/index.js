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
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { validatePostFields, validatePostFieldsSuccess, validatePostFieldsFailure } from '../../containers/Post/actions';
import { createPost, createPostSuccess, createPostFailure, resetNewPost } from '../../containers/Post/actions';

const validate = (values) => {
  const errors = {};
  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a Title!'
  }
  if (!values.message || values.message.trim() === '') {
    errors.message = 'Enter a Message!'
  }
  return errors;
}


const validateAndCreatePost = (values, dispatch) => {
  return dispatch(createPost(values))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(createPostFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);

      }
      dispatch(createPostSuccess(result.payload.data));
    });
}



class CreatePost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost.post && !nextProps.newPost.error) {
      this.context.router.push('/');
    }
  }

  renderTitleTextField({ meta: { touched, error }}) {
    <TextField
      type="text"
      hintText="This is a example title"
      floatingLabelText="Please input a title for your affirmation"
      errorText={touched && error}
      fullWidth={true}
    />
  }

  renderMessageTextField({ meta: { touched, error }}) {
    <TextField
      hintText="ex. This is the best advice you will ever receive!"
      floatingLabelText="Please spread your knowledge and experience to our community. :D"
      fullWidth={true}
      multiLine={true}
      rows={8}
    />
  }

  renderToggle() {
    <Toggle
      label="Anonymous?"
    />
  }

  renderSubmitButton() {
    <RaisedButton
      type="submit"
      label="Submit Affirmation"
      labelPosition="before"
      primary={true}
      icon={<AddCircleOutline />}
      Link to={'/'}
    />
  }


  render() {
    const {handleSubmit} = this.props;
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
              <form onSubmit={handleSubmit(this.validateAndCreatePost)}>
                <div style={{margin: 20}}>
                  <div>
                    <Field name="title" component={this.renderTitleTextField} />
                  </div><br />
                  <div>
                    <Field name="message" component={this.renderMessageTextField} />
                  </div><br />
                  <div>
                    <Field name="anon" component={this.renderToggle} />
                  </div><br />
                  <div style={center}>
                    <Field name="button" component={this.renderSubmitButton} />
                  </div>
                </div>
              </form>
            </ Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'CreatePost', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(CreatePost)