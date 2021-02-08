import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
