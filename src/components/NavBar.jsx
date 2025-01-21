import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#">TODO APP</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
