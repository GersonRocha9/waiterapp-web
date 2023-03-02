import { Container, Content, InfoContainer } from "./styles";
import { ReactNode, useContext } from "react";

import { ArrowsCounterClockwise } from "phosphor-react";
import { AuthContext } from "../../contexts/AuthProvider";

interface AuthContextData {
  signOut: () => Promise<void>;
}

interface HeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Header({ icon, title, description }: HeaderProps) {
  const { signOut } = useContext(AuthContext) as AuthContextData;

  return (
    <Container>
      <Content>
        <InfoContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {icon}
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{title}</p>
          </div>

          <p style={{ fontSize: "16px" }}>{description}</p>
        </InfoContainer>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button
            type="button"
            onClick={async () => {
              await signOut();
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "#D73035",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              padding: "18px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ArrowsCounterClockwise size={24} color="#d73035" />
            Reiniciar o dia
          </button>
        </div>
      </Content>
    </Container>
  );
}
