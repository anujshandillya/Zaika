import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
        At Zaika, we're passionate about bringing the best pizza experience to our customers. As the owner of this restaurant, I am proud to say that we only serve the highest quality pizzas made with fresh ingredients.
        <br /><br />
        Our menu features a range of vegetarian and non-vegetarian options that are sure to please every palate. From classic Margherita to spicy Chicken Tikka, our pizzas are made with a crispy, light crust that is sturdy enough to hold all of the delicious toppings.
        <br /><br />
        At Zaika, we believe that great food is only part of the dining experience. That's why we strive to create a welcoming and inclusive environment for all of our customers. Our staff is trained to provide exceptional service and help customers choose the perfect pizza for their taste.
        <br /><br />
        We're also committed to sustainability and eco-friendly practices. We source our ingredients from local farms and suppliers to ensure that everything is fresh and of the highest quality. We also use eco-friendly packaging to reduce our environmental footprint.
        <br /><br />
        Whether you're dining in, taking out, or getting delivery, we want to make sure that your experience at Zaika is exceptional. From our delicious pizzas to our commitment to sustainability, we're dedicated to bringing you the best pizza experience possible.
        <br /><br />
        Thank you for choosing Zaika. We look forward to serving you soon.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            The speciality of Zaika the Pizza restaurant is often what sets it apart from the rest. It can be the combination of unique toppings, a secret recipe for the crust, or a special cooking technique. A great speciality pizza can become a signature dish that customers come back for time and time again. It's important for a pizza restaurant to have a speciality that showcases their creativity and expertise in making pizza. Whether it's a classic margherita or an experimental vegan pizza, the speciality should reflect the restaurant's style and vision. A great speciality pizza can help establish a loyal customer base and elevate a pizza restaurant to the next level.
            </p>
          </Col>
          <Col md={6} >
            <img src="./images/speciality.jpg" style={{borderRadius: "5px", boxShadow: "5px 5px 20px #ffd698"}}></img>
          </Col>
        </Row>
        <Row>
          <h1>Our Best Sellers</h1>
          <Col md={3}>
          <Card className="pizza-cards">
            <Card.Img variant="top" src="./images/farmhouse.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Farm house Pizza</Card.Title>
                  <Card.Text>
                  Loaded with hearty toppings like ham, bacon, and sausage, the farmhouse pizza is a delicious and filling option
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={3}>
            <Card className="pizza-cards">
            <Card.Img variant="top" src="./images/veggie_paradise.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Veggie Paradise Pizza</Card.Title>
                  <Card.Text>
                  This vegetarian pizza is loaded with fresh veggies like bell peppers, onions, and mushrooms, making it a delicious and healthy option.
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={3}>
            <Card className="pizza-cards">
            <Card.Img variant="top" src="./images/margherita.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Margherita Pizza</Card.Title>
                  <Card.Text>
                  A simple yet delicious pizza that features fresh tomato sauce, mozzarella cheese, and fresh basil leaves.
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={3}>
            <Card className="pizza-cards">
            <Card.Img variant="top" src="./images/cheesepepperoni.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Chicken Pepperoni</Card.Title>
                  <Card.Text>
                  A classic pizza with a twist - chicken pepperoni adds a savory flavor to the classic pepperoni pizza
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
