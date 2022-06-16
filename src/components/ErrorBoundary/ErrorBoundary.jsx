import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      isError: false,
    };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    if (isError) {
      return (
        <div>
          <h1>Something went wrong...</h1>
        </div>
      );
    }
    return <>{children} </>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorBoundary;
