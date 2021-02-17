import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div``;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
    </Container>
  );
}
export default Login;
