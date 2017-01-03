/*
 *
 * JobHunt
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectJobHunt from './selectors';

export class JobHunt extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="JobHunt"
          meta={[
            { name: 'description', content: 'Description of JobHunt' },
          ]}
        />
        <p>asdfasdf</p>
      </div>

    );
  }
}

const mapStateToProps = selectJobHunt();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobHunt);
