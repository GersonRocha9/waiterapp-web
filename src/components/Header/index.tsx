import logo from "../../assets/images/logo.svg";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="WAITERAPP Logo" />
      </Content>
    </Container>
  );
}
