/*
 *
 * Post
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectPost from './selectors';

export class Post extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Post"
          meta={[
            { name: 'description', content: 'Description of Post' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectPost();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
