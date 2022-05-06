import PropTypes from "prop-types";
import React from "react";
import { Container } from "shards-react";

const NormalLayout = ({ children, noNavbar, noFooter }) => (
  <Container style={{ margin: "0", padding: "0", backgroundColor: "#fff" }}>
    {children}
  </Container>
);

NormalLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
};

NormalLayout.defaultProps = {
  noNavbar: true,
  noFooter: true,
};

export default NormalLayout;
