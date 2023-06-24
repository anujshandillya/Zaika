import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


const HomeScreen = () => {
  return (
    <>
      <Container >
        <Carousel fade interval={3000} className="carousel" controls={false}>
          <Carousel.Item>
            <img
              style={{height: '750px'}}
              className="d-block w-100"
              src="./images/1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{height: '750px'}}
              className="d-block w-100"
              src="./images/2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{height: '750px'}}
              className="d-block w-100"
              src="./images/3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <h1>Welcome To ZAIKA-The Pizza Restaurant</h1> <hr></hr>
        <div>
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
        </div>
        <h1>Our Customer Reviews</h1> <hr></hr>
        <div style={{display: 'flex', justifyContent: 'space between'}}>
          <Card className="pizza-card">
            <Card.Img variant="top" src="./images/margherita.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Tastes Amazing</Card.Title>
                  <Card.Text>
                  The pizza here is amazing! The crust is perfectly crispy and the toppings are so flavorful. I highly recommend trying the margherita pizza
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="pizza-card">
            <Card.Img variant="top" src="./images/veggie_paradise.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Delicious</Card.Title>
                  <Card.Text>
                  I'm in love with the pizza at this place! The ingredients are top quality and the flavors are incredible. The garlic knots are also a must-try.
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="pizza-card">
            <Card.Img variant="top" src="./images/cheesepepperoni.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Mouth Watering</Card.Title>
                  <Card.Text>
                    I could eat this pizza every day! The sauce is tangy and the pepperoni is just the right amount of spicy.
                  <br />
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="pizza-card">
            <Card.Img variant="top" src="./images/farmhouse.jpg" style={{height: '11rem', padding: '1rem'}}/>
              <Card.Body>
                <Card.Title>Fantastic</Card.Title>
                  <Card.Text>
                  This pizza is hands down the best I've ever had! The cheese is gooey and delicious and the sauce has the perfect balance of spices
                    <br />
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default HomeScreen;
