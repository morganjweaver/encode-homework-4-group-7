import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (    
    <Menu fixed="top" inverted >
      <Container className="text-center">
        <Menu.Item header as={NavLink} exact="true" to="/">
          <img
            src="/images/lazer-logo-2.png"
            alt="logo"
            style={{ marginRight: "10px", height: "52px" }} 
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default Header;
