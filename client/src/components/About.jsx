import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who are we</h1>
        <p>

          Welcome to our pizza place, where we serve the best and most delicious pizzas in town. Our passion for pizza drives us to create mouth-watering pies that will satisfy your cravings and leave you wanting more.

          We value quality over quantity and use only the freshest and finest ingredients to ensure the perfect balance of flavors in every slice. Each pizza is handcrafted with care and attention to detail, from the dough to the toppings.

          Our love for pizza goes beyond just making great food. We strive to create a warm and welcoming environment where you can enjoy a slice with friends and family. Whether you’re looking for a quick lunch or a casual dinner, our staff is dedicated to providing exceptional service and ensuring you have a memorable experience.

          At our pizza place, we believe that great food should be accessible to everyone. That’s why we offer a wide variety of options to accommodate different dietary needs, including gluten-free crusts and vegan toppings.

          We are committed to serving our community and giving back in meaningful ways. From supporting local charities to using eco-friendly packaging, we aim to make a positive impact on the world around us.

          Thank you for choosing our pizza place as your go-to spot for delicious pizza. We look forward to serving you soon!
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              Our pizza restaurant prides itself on offering a unique and customizable pizza experience. Our speciality is creating delicious pizzas made with fresh, high-quality ingredients that satisfy any craving or preference.

              One of our standout features is our customizable options. Customers can choose from a variety of crusts, sauces, cheeses, and toppings to create their perfect pizza. We also offer gluten-free and vegan options to cater to different dietary needs.

              We use a proprietary recipe for our pizza dough, which is handmade daily in-house to ensure freshness and quality.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Our sauces are made from the finest tomatoes and herbs, and we use only premium cheeses and meats as toppings.

              Another speciality of our pizza restaurant is our commitment to sustainability. We use eco-friendly packaging for our pizzas and strive to minimize our environmental impact in all aspects of our business.

              In addition, we offer a variety of other menu items, including salads, sides, and desserts. Guests can enjoy a complete dining experience with us, from appetizers to dessert,


            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Chef</h1>
          <Col md={3}>
            Chef Gordon Ramsay: A celebrity chef and restaurateur, famous for his fiery personality and no-nonsense approach to cooking. He has multiple Michelin-starred restaurants and is known for his expertise in French and British cuisine.
          </Col>
          <Col md={3}>
            Chef Alice Waters: The founder of the iconic restaurant Chez Panisse in Berkeley, California, and a pioneer of the farm-to-table movement. She focuses on using fresh, locally-sourced organic ingredients and creating simple, flavorful dishes.


          </Col>
          <Col md={3}>
            Chef Massimo Bottura: An Italian chef who is considered one of the best in the world. He runs Osteria Francescana, a three-Michelin-starred restaurant in Modena, Italy, where he combines traditional Italian flavors with modern techniques.
          </Col>
          <Col md={3}>
            Chef Niki Nakayama: A Los Angeles-based Japanese-American chef known for her Kaiseki-style cuisine, which emphasizes small, beautifully presented dishes that highlight the natural flavors of each ingredient. She is the owner and head chef at n/naka, which has two Michelin stars.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
