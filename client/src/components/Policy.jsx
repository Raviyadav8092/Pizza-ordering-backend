import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
              Reservations
            </h6>
            <p>
              We highly encourage making reservations in advance to ensure availability. If you need to cancel or change your reservation, please do so at least 24 hours in advance.
            </p>
            <h6>
              Dress Code
            </h6>
            <p>
              We have a business casual dress code. We ask that guests refrain from wearing athletic clothing, flip-flops or beachwear.
            </p>
            <h6>
              Payment
            </h6>
            <p>
              We accept all major credit cards as well as cash. Separate checks are available upon request for groups of six or more. A gratuity of 18% will be added to parties of six or more.
            </p>
            <h6>
              Allergies and Dietary Needs
            </h6>
            <p>
              Please inform your server of any food allergies or dietary restrictions before ordering. We will do our best to accommodate your needs.
            </p>
            <h6>
              Gift Cards
            </h6>
            <p>
              Gift cards can be purchased in-store or online through our website. They are non-refundable and cannot be exchanged for cash.
            </p>
            <h6>
              Privacy Policy
            </h6>
            <p>
              We respect your privacy and will never share your personal information with third parties. Any information we collect, such as your name and email address, will only be used to improve our services and communicate with you about promotions or events.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
