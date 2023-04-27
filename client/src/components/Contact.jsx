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
            <h1>Techinfo YT Pizza Shop</h1>
            <p>
              We would love to hear from you! Please feel free to contact us with any questions, comments, or feedback.

              Location
              123 Main Street
              Anytown, USA 12345

              Hours of Operation
              Monday - Friday: 11am - 10pm
              Saturday - Sunday: 9am - 11pm

              Reservations
              To make a reservation, please call us at (123) 456-7890 or use our online reservation system [here](insert link to online reservation system).

              Catering
              Let us cater your next event! Contact us at catering@ourrestaurant.com for more information.

              Employment
              Interested in joining our team? Check out our [careers page](insert link to careers page) for current job openings and to submit your resume.

              General Inquiries
              For all other inquiries, please fill out the form below or email us at info@ourrestaurant.com. We will get back to you as soon as possible.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
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
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
