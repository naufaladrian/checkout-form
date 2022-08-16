import "./App.scss";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Card,
  ListGroup,
  InputGroup,
} from "react-bootstrap";

function App() {
  return (
    <div style={{ backgroundColor: " whitesmoke " }}>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">M Naufal Adrian</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="header-page">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="bt"
          />
          <h1>Checkout form</h1>
          <p>
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="main">
          <div className="form">
            <div className="form-title">
              <h2>Billing address</h2>
            </div>
            <Form>
              <div className="form-name">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email (Optional)</Form.Label>
                <Form.Control type="text" placeholder="Email@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="123 Main St" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address 2 (Optional)</Form.Label>
                <Form.Control type="text" placeholder="123 Main St" />
              </Form.Group>
              <div className="form-group">
                <Form.Group
                  className="mb-3 form-group-item"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group-item"
                  controlId="formBasicEmail"
                >
                  <Form.Label>language</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 form-group-item"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <hr />
              <div className="check-box">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Shipping address is the same as my billing address`}
                    />

                    <Form.Check
                      type={type}
                      label={`Save this information for next time`}
                      id={`disabled-default-${type}`}
                    />
                  </div>
                ))}
              </div>
              <hr />
              <div className="payment">
                <div className="payment-title">
                  <h3>Payment</h3>
                </div>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Credit card`}
                    />

                    <Form.Check
                      type={type}
                      label={`Debit card`}
                      id={`disabled-default-${type}`}
                    />

                    <Form.Check
                      type={type}
                      label={`Paypal`}
                      id={`disabled-default-${type}`}
                    />
                  </div>
                ))}
                <div className="pay-i">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Credit card number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className="expiration">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Expiration</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <hr />
                <Button variant="outline-primary">Continue to checkout</Button>
              </div>
            </Form>
          </div>
          <div className="cart">
            <div className="cart-title">
              <h2>Your Cart</h2>
              <p>3</p>
            </div>
            <Card className="card">
              <ListGroup variant="flush">
                <ListGroup.Item className="card-item">
                  <div className="product">
                    <h5>Product name</h5>
                    <p>Brief description</p>
                  </div>
                  <div className="price">
                    <p>$12</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  <div className="product">
                    <h5>Product name</h5>
                    <p>Brief description</p>
                  </div>
                  <div className="price">
                    <p>$12</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  <div className="product">
                    <h5>Product name</h5>
                    <p>Brief description</p>
                  </div>
                  <div className="price">
                    <p>$12</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="discount card-item">
                  <div className="product">
                    <h5>Product name</h5>
                    <p>Brief description</p>
                  </div>
                  <div className="price">
                    <p>$12</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  <div className="product">
                    <h5>Product name</h5>
                    <p>Brief description</p>
                  </div>
                  <div className="price">
                    <p>$12</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card style={{ marginTop: "10px", padding: "10px" }}>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  className="cart-search"
                />
                <Button variant="success" className="cart-search">
                  Search
                </Button>
              </Form>
            </Card>
          </div>
        </div>
        <div className="footer">
          <p>© 2017-2018 Company Name</p>
          <a href="!#">Privacy</a>
          <a href="!#">Terms</a>
          <a href="!#">Support</a>
        </div>
      </div>
    </div>
  );
}

export default App;
