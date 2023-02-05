import React, { useState } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";

// Review component is where i was able to make my stars and review section work. For this I followed along a youtube video
// and used react bootstrap and the stars images were installed on the index.html file.
function App() {
  const [clicked, setClicked] = useState(false);
  const [stars, setStars] = useState(1);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);


  const onMouseOver = (rating) => {
    if (clicked) return;

    [...Array(rating)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
    });
  };

  const onMouseOut = (rating) => {
    if (clicked) return;

    [...Array(rating)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
    });
  };

  const onClick = (rating) => {
    setClicked(true);
    setStars(rating);
    
    // Reset
    [...Array(5)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
    });

    // highlight
    [...Array(rating)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
    });
  };

  const resetForm = (e) => {
    e.preventDefault();

    // Reset
    [...Array(5)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
    });

    setReview("");
    setStars(1);
    setClicked(false);
  };

  const submitReview = (e) => {
    e.preventDefault();
    const newReview = {
      rating: stars,
      description: review,
    };

    setReviews([...reviews, newReview]);
    resetForm(e);
  };

  const deleteReview = (e, index) => {
    e.preventDefault();

    const clone = [...reviews];
    const newState = clone.filter((x, i) => i !== index);
    setReviews(newState);
  };

  return (
    <Container>
        <h4>Leave a Review</h4>
      <Col md={{ span: 10, offset: 1 }}>
        <Row>
          <Col>
            {[...Array(5)].map((x, i) => {
              return (
                <i
                  key={i}
                  className="far fa-star display-6"
                  id={`star-${i + 1}`}
                  onMouseOver={(e) => onMouseOver(i + 1)}
                  onMouseOut={(e) => onMouseOut(i + 1)}
                  onClick={(e) => onClick(i + 1)}
                />
              );
            })}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            <Button variant="primary" onClick={(e) => resetForm(e)}>
              Reset
            </Button>
            <Button
              variant="success"
              onClick={(e) => submitReview(e)}
              disabled={review === ""}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col>
            {reviews.map((r, rIndex) => {
              return (
                <Card className="mt-1 mb-1 text-light">
                  <Card.Body>
                    {[...Array(r.rating)].map((s, sIndex) => {
                      return <i className="fas fa-star text-danger" />;
                    })}
                    <p>{r.description}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="danger"
                      onClick={(e) => deleteReview(e, rIndex)}
                    >
                      Delete
                    </Button>
                  </Card.Footer>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
    