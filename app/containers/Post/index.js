/*
 *
 * Post
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectPost from './selectors';
import { resetNewPost } from './actions';
import CreatePost from '../../components/CreatePost/index';

export class Post extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          <Helmet
            title="Post"
            meta={[
              { name: 'description', content: 'Description of Post' },
            ]}
          />
        </div>
        <div>
          <CreatePost/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectPost();

function mapDispatchToProps(dispatch) {
  return {
    resetMe: () => {
      dispatch(resetNewPost())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);

