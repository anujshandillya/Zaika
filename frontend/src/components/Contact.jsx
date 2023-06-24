import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Zaika-The Pizza Restaurant</h1>
            <p>
            Zaika is conveniently located in the heart of the city Faridabad, just a few blocks away from the main bus station and a short drive from the train station. The restaurant is situated on the main street and is easily accessible by car or public transportation. To reach Zaika by public transportation, take the bus to the main bus station and then walk for five minutes. To reach Zaika by car, simply follow the directions to the city center and look for the restaurant's sign.
            <br /> <br />
            You can also contact us through the below given details:
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-orange text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Zaika@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/zaika-logo1.png"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
