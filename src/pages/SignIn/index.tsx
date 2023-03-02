import { Container, Form, FormContainer, FormHeader } from "./styles";
import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthProvider";
import { Input } from "../../components";
import { Navigate } from "react-router-dom";

interface AuthContextData {
  isLogged: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  error: string;
  loading: boolean;
}

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLogged, error, loading } = useContext(
    AuthContext
  ) as AuthContextData;

  if (isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <FormContainer>
        <FormHeader>
          <p
            style={{
              fontSize: 14,
              opacity: 0.9,
            }}
          >
            Bem vindo(a) ao
          </p>
          <div className="logo-container">
            <p
              style={{
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              WAITER
            </p>
            <p
              style={{
                fontSize: 24,
              }}
            >
              APP
            </p>
          </div>
        </FormHeader>

        <Form>
          <Input
            placeholder="Seu e-mail de acesso"
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Informe sua senha"
            label="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            className="primary"
            type="button"
            disabled={email.length === 0 || password.length === 0 || loading}
            onClick={() => signIn(email, password)}
          >
            Fazer Login
          </button>
        </Form>
      </FormContainer>
    </Container>
  );
};
