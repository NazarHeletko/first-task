import React from "react";

import PropTypes from "prop-types";

export default class Loader extends React.Component {
    render() {
        return (
          <>
              {this.props.showLoader === true && (
                <div className="page-loader"/>
              )}
          </>
        );
    }
}

Loader.defaultProps = {
    showLoader: false
};

Loader.propTypes = {
    showLoader: PropTypes.bool
};
