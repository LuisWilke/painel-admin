import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #f4f4f4;
  padding: 20px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const DocumentosReceber = () => {
  return (
    <Container>
      <Sidebar>
        <h2>Menu</h2>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/documentos-receber">Documentos a Receber</a></li>
        </ul>
      </Sidebar>
      <Content>
        <h1>Documentos a Receber</h1>
        <Table>
          <thead>
            <tr>
              <Th>Cliente</Th>
              <Th>Documento</Th>
              <Th>Parcela</Th>
              <Th>Emissão</Th>
              <Th>Vencimento</Th>
              <Th>Valor</Th>
              <Th>Juros</Th>
              <Th>Total</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Ana Maria Braga</Td>
              <Td>1234567</Td>
              <Td>1</Td>
              <Td>01/12/2024</Td>
              <Td>02/01/2025</Td>
              <Td>4.374,88</Td>
              <Td>105,00</Td>
              <Td>4.479,88</Td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default DocumentosReceber;