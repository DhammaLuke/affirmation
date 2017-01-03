/*
 *
 * SinglePost
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectSinglePost from './selectors';
import PostView from '../../components/PostView/index';

export class SinglePost extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SinglePost"
          meta={[
            { name: 'description', content: 'Description of SinglePost' },
          ]}
        />
        <PostView />
      </div>
    );
  }
}

const mapStateToProps = selectSinglePost();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
