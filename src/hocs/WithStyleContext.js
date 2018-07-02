import * as React from "react";
import PropTypes from "prop-types";

/**
 * WithStylesContext
 * Returns a child component with insertCss function allowing isomorphic rendering to work.
 */
class WithStylesContext extends React.Component {
  getChildContext() {
    return {
      insertCss: this.props.onInsertCss
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

WithStylesContext.childContextTypes = {
  insertCss: PropTypes.func.isRequired
};

export default WithStylesContext;
