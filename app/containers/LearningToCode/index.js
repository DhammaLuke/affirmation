/*
 *
 * LearningToCode
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLearningToCode from './selectors';

export class LearningToCode extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="LearningToCode"
          meta={[
            { name: 'description', content: 'Description of LearningToCode' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectLearningToCode();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningToCode);
