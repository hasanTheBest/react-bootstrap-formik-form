import { Container, Row, Col } from "react-bootstrap";
import CustomFormik from "./CustomFormik";

export default function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-3 p-4 text-center text-success">React Bootstrap Formik</h1>
          <CustomFormik />
        </Col>
      </Row>
    </Container>
  );
}
