import React, { Component } from "react";
import "./Contacts.css";
import {
  Container,
  FormGroup,
  FormLabel,
  Form,
  FormControl,
  FormText,
  FormCheck,
  Button
} from "react-bootstrap";

class Contacts extends Component {
  render() {
    return (
      <div>
          <h1 className="text-center">Свяжитесь с нами</h1>
        <Container style={{ width: '500px' }}>
          <Form>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email адрес</FormLabel>
              <FormControl type="email" placeholder="Введите ваш email" />
              <FormText>
                Мы никогда не дадим адрес вашего email кому-то ещё
              </FormText>
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
                <FormLabel>Текстовое поле</FormLabel>
                <FormControl as="textarea" rows="3" />
            </FormGroup>
            <FormGroup controlId="formBasicCheckbox">
                <FormCheck type="checkbox" label="Проверить меня" />
            </FormGroup>
            <Button variant="primary" type="submit" >Отправить</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contacts;
