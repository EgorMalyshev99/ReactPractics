import React, { Component } from "react";
import "./Home.css";
import Slider from "../../components/slider_box/Slider";
import { Container, CardDeck, Card, CardImg, Button } from "react-bootstrap";
import card1_img from "../../media/lamb_aventador.jpg";
import card2_img from "../../media/lamb_huracan.jpg";
import card3_img from "../../media/lamb_urus.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Container>
          <h2 className="text-center m-4"> Наши проекты </h2>
          <CardDeck className="m-4">
            <Card bg="dark" text="light">
              <CardImg variant="top" src={card1_img} />
              <Card.Body>
                <Card.Title>Aventador</Card.Title>
                <Card.Text>
                  Пришел на смену автомобилю Murcielago, выпускается с 2011
                  года. В основе конструкции автомобиля — легкий и прочный
                  углепластиковый монокок, спереди и сзади к нему пристыкованы
                  алюминиевые подрамники.
                </Card.Text>
                <Button variant="success">Узнать больше</Button>
              </Card.Body>
            </Card>
            <Card bg="dark" text="light">
              <CardImg variant="top" src={card2_img} />
              <Card.Body>
                <Card.Title>Huracan</Card.Title>
                <Card.Text>
                  Данная модель комплектуется семиступенчатой роботизированной
                  коробкой передач, у всех версий — полный привод,
                  полноуправляемое шасси с подруливающими задними колёсами,
                  адаптивная подвеска.
                </Card.Text>
                <Button variant="success">Узнать больше</Button>
              </Card.Body>
            </Card>
            <Card bg="dark" text="light">
              <CardImg variant="top" src={card3_img} />
              <Card.Body>
                <Card.Title>Urus</Card.Title>
                <Card.Text>
                  В основе конструкции автомобиля — «фольксвагеновская»
                  платформа MLB Evo. Оснащается пневмоподвеской с
                  адаптивными амортизаторами, активным задним дифференциалом и
                  подруливающими задними колёсами. Пневмоподвеска позволяет
                  увеличить дорожный просвет до 248 мм.
                </Card.Text>
                <Button variant="success">Узнать больше</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default Home;
