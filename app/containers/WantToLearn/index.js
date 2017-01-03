/*
 *
 * WantToLearn
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectWantToLearn from './selectors';

export class WantToLearn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="WantToLearn"
          meta={[
            { name: 'description', content: 'Description of WantToLearn' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectWantToLearn();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WantToLearn);
