import React from "react";
import styled from "styled-components";
import { FaUser, FaHome, FaSyncAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#cce5ff" : "transparent")};
  border-radius: 5px;
  margin-bottom: 10px;

  &:hover {
    background: #cce5ff;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  font-size: 20px;
`;

const RefreshButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

const Amount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const ClientInfo = styled.div`
  font-size: 14px;
  color: #777;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <Logo>LOGO</Logo>
        <MenuItem active>
          <FaHome /> Início
        </MenuItem>
        <MenuItem>
          <FaUser /> Minha conta
        </MenuItem>
        <MenuItem onClick={() => navigate("/Documentos-receber")}>
          <FaHome /> Cobranca
        </MenuItem>
      </Sidebar>

      <MainContent>
        <Header>
          <UserInfo>
            <p>Olá, Luis Eduardo</p>
            <span>Empresa Logada: HMC Serviços LTDA - 12.435.974/0001-74</span>
          </UserInfo>
          <RefreshButton>
            <FaSyncAlt /> Atualizado há 1min
          </RefreshButton>
        </Header>

        <h3>Situação atual do contas a receber</h3>

        <GridContainer>
          <Card>
            <CardTitle>Hoje</CardTitle>
            <Amount>R$ 129.454,00</Amount>
            <ClientInfo>
              <FaUser /> 15 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>A vencer em até 2 dias</CardTitle>
            <Amount>R$ 545.123,09</Amount>
            <ClientInfo>
              <FaUser /> 45 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>A vencer de 3 até 10 dias</CardTitle>
            <Amount>R$ 232.123,09</Amount>
            <ClientInfo>
              <FaUser /> 25 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>A vencer acima de 10 dias</CardTitle>
            <Amount>R$ 125.123,09</Amount>
            <ClientInfo>
              <FaUser /> 28 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Total vencido</CardTitle>
            <Amount>R$ 15.898,08</Amount>
            <ClientInfo>
              <FaUser /> 13 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Total vencendo HOJE</CardTitle>
            <Amount>R$ 129.454,00</Amount>
            <ClientInfo>
              <FaUser /> 15 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Total a vencer</CardTitle>
            <Amount>R$ 902.369,27</Amount>
            <ClientInfo>
              <FaUser /> 98 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Total geral a receber</CardTitle>
            <Amount>R$ 1.0147.721,35</Amount>
            <ClientInfo>
              <FaUser /> 126 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Vencidos até 2 dias</CardTitle>
            <Amount>R$ 9.454,00</Amount>
            <ClientInfo>
              <FaUser /> 3 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Vencidos entre 3 e 10 dias</CardTitle>
            <Amount>R$ 2.123,09</Amount>
            <ClientInfo>
              <FaUser /> 5 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Vencidos entre 11 e 30 dias</CardTitle>
            <Amount>R$ 3.177,00</Amount>
            <ClientInfo>
              <FaUser /> 3 Clientes
            </ClientInfo>
          </Card>

          <Card>
            <CardTitle>Vencidos a mais de 30 dias</CardTitle>
            <Amount>R$ 1.143,99</Amount>
            <ClientInfo>
              <FaUser /> 2 Clientes
            </ClientInfo>
          </Card>
        </GridContainer>
      </MainContent>
    </Container>
  );
};

export default Dashboard;