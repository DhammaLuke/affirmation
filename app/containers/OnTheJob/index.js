/*
 *
 * OnTheJob
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectOnTheJob from './selectors';
import PostPreview from '../../components/PostPreview/index';

export class OnTheJob extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="OnTheJob"
          meta={[
            { name: 'description', content: 'Description of OnTheJob' },
          ]}
        />
        <PostPreview />
      </div>
    );
  }
}

const mapStateToProps = selectOnTheJob();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTheJob);
