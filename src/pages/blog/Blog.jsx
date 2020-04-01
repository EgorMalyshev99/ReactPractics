import React, { Component } from "react";
import "./Blog.css";
import {
  Container,
  Col,
  Media,
  Row,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import blog_image from "../../media/lamb_logo.png";

class Blog extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="9">
              <Media className="m-5">
                <img
                  src={blog_image}
                  width={150}
                  height={150}
                  className="mr-3"
                  alt=""
                />
                <Media.Body>
                  <h5>Пост</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, fuga. Eius nulla omnis molestias asperiores, sint fugiat
                    aspernatur itaque? Ipsum voluptates nulla reiciendis
                    accusamus molestias incidunt natus voluptas accusantium
                    facere!
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  src={blog_image}
                  width={150}
                  height={150}
                  className="mr-3"
                  alt=""
                />
                <Media.Body>
                  <h5>Пост</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, fuga. Eius nulla omnis molestias asperiores, sint fugiat
                    aspernatur itaque? Ipsum voluptates nulla reiciendis
                    accusamus molestias incidunt natus voluptas accusantium
                    facere!
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  src={blog_image}
                  width={150}
                  height={150}
                  className="mr-3"
                  alt=""
                />
                <Media.Body>
                  <h5>Пост</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, fuga. Eius nulla omnis molestias asperiores, sint fugiat
                    aspernatur itaque? Ipsum voluptates nulla reiciendis
                    accusamus molestias incidunt natus voluptas accusantium
                    facere!
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  src={blog_image}
                  width={150}
                  height={150}
                  className="mr-3"
                  alt=""
                />
                <Media.Body>
                  <h5>Пост</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, fuga. Eius nulla omnis molestias asperiores, sint fugiat
                    aspernatur itaque? Ipsum voluptates nulla reiciendis
                    accusamus molestias incidunt natus voluptas accusantium
                    facere!
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col md="3">
              <h5 className="text-center mt-4">Категории</h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>HTML/CSS</ListGroupItem>
                  <ListGroupItem>JavaScript</ListGroupItem>
                  <ListGroupItem>React</ListGroupItem>
                  <ListGroupItem>Bootstrap</ListGroupItem>
                  <ListGroupItem>GitHub</ListGroupItem>
                </ListGroup>
              </Card>
              <Card className="mt-3" bg="light">
                <Card.Body>
                  <Card.Title>Боковой виджет</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum aliquid repellat saepe natus dolore temporibus
                    delectus quod!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blog;
