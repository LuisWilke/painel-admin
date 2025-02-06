import { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [cnpj, setCnpj] = useState("");
  const [emailCpf, setEmailCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ cnpj, emailCpf, password });
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input 
            type="text" 
            placeholder="CNPJ" 
            value={cnpj} 
            onChange={(e) => setCnpj(e.target.value)} 
          />
          <Input 
            type="text" 
            placeholder="E-mail ou CPF" 
            value={emailCpf} 
            onChange={(e) => setEmailCpf(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <ForgotPassword href="/recuperar-senha">Esqueci minha senha</ForgotPassword>
      </LoginBox>
    </Container>
  );
};

export default Login;

// Estilos com Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;